## package

----

## react-native-screens
  - ## android
    1. `react-native-screens` package requires one additional configuration step to properly work on Android devices. Edit MainActivity.
    2. java file which is located in `android/app/src/main/java/<your package name>/MainActivity.java`.
    3. Add the following code to the body of MainActivity class.
1. 
   ``` java
    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(null);
    }
   ```
   1. and make sure to add an import statement at the top of this file: `import android.os.Bundle;`
   
  - ## ios
    1. `<key>NSCameraUsageDescription</key><string>Using for scan QR code</string>`
    2. `<key>NSPhotoLibraryUsageDescription</key><string>We need your permission to use your camera</string>`
    3. `pod install`

----

##