import React, { Component } from 'react';
import { AppState, BackHandler, SafeAreaView, Text, TouchableWithoutFeedback } from 'react-native';
import {
  BarcodeSelection,
  BarcodeSelectionAimerSelection,
  BarcodeSelectionBasicOverlay,
  BarcodeSelectionSettings,
  BarcodeSelectionTapSelection,
  Symbology,
  SymbologyDescription,
} from 'scandit-react-native-datacapture-barcode';
import { Camera, DataCaptureContext, DataCaptureView, FrameSourceState } from 'scandit-react-native-datacapture-core';

import { requestCameraPermissionsIfNeeded } from './camera-permission-handler';

const licenseKey = "AUUh/zRnFdJjRPMIeDg6OHUCpYO1IEViGX3q1JROUrciUeeRFQ3Vk6BH7m8nIFhTFGy8g4FF9zVDQHzxyHY/JBADZNbcd+tzjRRyvRVg0AoBXaKgoHZ1rkdWOZYhbC6CS2IYcN83s1aNBa0xyRfZ66QMdGSVN0YMMEPpYRpbEI/VUkhiehj1suZ30BOhVDjPSlsldSQxElF4VQZiaGrgUxtmzCd9RpVv8H0wD4B0fVj/d9Eftk6BXg9fTXeHZz1lX10ECvBTgktbSMUle2CUz41ICzp5E+RRwl8ueQBN3sn5Z4/aHlgxkJdCQ9Gke0dukUJSR3pWL6MNNTrQXBOyNm5/7nZTPaAQIkXxYXt1puJqeArl8UhvXDx9k4i8PFayJlYbF7Ab3W71cUOIm0xbvK4sNub9ByP4y3FYyklpishJL3gb7mL0ZgFILEIYYtzcJHMst9FwqVV4QsOqHHgCX2dTiEsiRSAZa2dDA61lkFhzQfdKZUZARxdYzeNJbo1Y10ErOrZmDsXGapDSyXy5yGx1Q/TEXk0r9HVynbRKPKOqTEhII05jSnsKq3HeRSCKAS6oa2gp97qNL0HKFbWBFZZKxyn8U6TVB9RUdnVNAxEy1L+GDP2690pGtwN09YXUhlBZ5txs/rESkmdFcsJ2W+0HHx2Qp+cTULygLU/hYiRf/IbFe2OJCfbSgXifk0r1JbAUtDeJuGAM2sSitpMU1mkArC2dT26E67dCQG1tPoosXlE34QILAXbiJPW6Zxuc8pY3NL8tzWWwHWPy/7E5q6CPyN6ubnVa9qFETo+vkKr/RyOkYCBv5EiA7fHZjlX84k5taF3yp1/VF6UiA0RGzETg+bAggjsgObEQyt5PQmgcM6J0UFsUoi9pNXqmnyrfRB71nIB6pTKtzRlMT26Ty7ubS1kZ2efcoMLt6euEsdh+mPuPbBEJlROpTRVsO5oquCpbIWvJ96lNspoWiGRi74KnoVCHH4qfPZtS2Z+3wMfFLJVgfgTq168PDFtFYEtYP6TVdkyySzoK9YUvVMQ4Wh05bM0sIOdEiGguAoMRjp7M52nSZge4gi/Y6y7+RjJ9ENuu345FswAQODfnFdoRMpdkN3aQ1YeMRfc4UoLuyPOV5tm9WktMxMMfaXoeCH2dbpjJX+5opMeDjRu5Iyh04D9PkBweTeMbxcSq5dZh0hnroFXXhl6+mU425Ygk9x0iscMQP4NY+vn8DOWvINHacMq6obqTydOshitA"

const SelectionType = {
  tap: 'tap',
  aim: 'aim',
}

export default class App extends Component {
  state = {
    selectionType: SelectionType.tap,
    result: null,
  }
  dataCaptureContext: any
  viewRef: any
  barcodeSelectionSettings: any
  barcodeSelection: any
  constructor(props: any) {
    super(props);

    this.dataCaptureContext = DataCaptureContext.forLicenseKey(licenseKey);
    this.viewRef = React.createRef();
  }

  async componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);

    this.startCamera();

    // The barcode selection process is configured through barcode selection settings
    // and are then applied to the barcode selection instance that manages barcode recognition.
    this.barcodeSelectionSettings = new BarcodeSelectionSettings();

    // The settings instance initially has all types of barcodes (symbologies) disabled. For the purpose of this
    // sample we enable a very generous set of symbologies. In your own app ensure that you only enable the
    // symbologies that your app requires as every additional enabled symbology has an impact on processing times.
    this.barcodeSelectionSettings.enableSymbologies([
      Symbology.EAN13UPCA,
      Symbology.EAN8,
      Symbology.UPCE,
      Symbology.QR,
      Symbology.DataMatrix,
      Symbology.Code39,
      Symbology.Code128,
    ]);

    // Create new barcode selection mode with the settings from above.
    this.barcodeSelection = BarcodeSelection.forContext(this.dataCaptureContext, this.barcodeSelectionSettings);

    // Register a listener to get informed whenever a new barcode got recognized.
    this.barcodeSelection.addListener({
      didUpdateSelection: (_barcodeSelection: any, session: { newlySelectedBarcodes: any[]; getCount: (arg0: any) => Promise<any>; }, _: any) => {
        const barcode = session.newlySelectedBarcodes[0];

        if (!barcode) { return }

        const symbology = new SymbologyDescription(barcode.symbology);

        session.getCount(barcode).then(count => {
          const result = `Scan Results\n${symbology.readableName}: ${barcode.data}\nTimes: ${count}`;
          this.setState({ result: result })
          setTimeout(() => {
            this.setState({ result: null });
            this.barcodeSelection.isEnabled = true;
          }, 500);
        });

        this.barcodeSelection.isEnabled = false;
      }
    });

    // Add a barcode selection overlay to the data capture view to render the location of captured barcodes on top of
    // the video preview. This is optional, but recommended for better visual feedback.
    const overlay = BarcodeSelectionBasicOverlay.withBarcodeSelectionForView(this.barcodeSelection, this.viewRef.current);

    this.setupSelectionType(this.state.selectionType);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
    this.dataCaptureContext.dispose();
  }

  handleAppStateChange = async (nextAppState: string) => {
    if (nextAppState.match(/inactive|background/)) {
      this.stopCamera();
    } else {
      this.startCamera();
    }
  }
  camera: any
  stopCamera() {
    if (this.camera) {
      this.camera.switchToDesiredState(FrameSourceState.Off);
    }
  }

  startCamera() {
    if (!this.camera) {
      this.camera = Camera.default;
      this.dataCaptureContext.setFrameSource(this.camera);
    }

    requestCameraPermissionsIfNeeded()
      .then(() => this.camera.switchToDesiredState(FrameSourceState.On))
      .catch(() => BackHandler.exitApp());
  }

  componentDidUpdate(_: any, previousState: { selectionType: string; }) {
    if (previousState.selectionType !== this.state.selectionType) {
      this.setupSelectionType(this.state.selectionType);
    }
  }

  setupSelectionType(selectionType: string) {
    if (selectionType === SelectionType.tap) {
      this.barcodeSelectionSettings.selectionType = BarcodeSelectionTapSelection.tapSelection;
      this.barcodeSelection.applySettings(this.barcodeSelectionSettings);
    } else if (selectionType === SelectionType.aim) {
      this.barcodeSelectionSettings.selectionType = BarcodeSelectionAimerSelection.aimerSelection;
      this.barcodeSelection.applySettings(this.barcodeSelectionSettings);
    }
  }

  render() {
    return (
      <>
        <DataCaptureView style={{ flex: 1 }} context={this.dataCaptureContext} ref={this.viewRef} />

        <SafeAreaView style={{ width: '100%', backgroundColor: "black", flexDirection: "row", justifyContent: "space-around", alignItems: 'center' }}>
          <TouchableWithoutFeedback onPress={() => this.setState({ selectionType: SelectionType.tap })}>
            <Text style={{ padding: 15, color: this.state.selectionType === SelectionType.tap ? 'white' : 'grey' }}>Tap to Select</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.setState({ selectionType: SelectionType.aim })}>
            <Text style={{ padding: 15, color: this.state.selectionType === SelectionType.aim ? 'white' : 'grey' }}>Aim to Select</Text>
          </TouchableWithoutFeedback>
        </SafeAreaView>

        {this.state.result &&
          <Text style={{
            position: 'absolute', top: 100, width: '100%', textAlign: 'center', backgroundColor: '#FFFC', padding: 20,
          }}>{this.state.result}</Text>}
      </>
    );
  }
}
