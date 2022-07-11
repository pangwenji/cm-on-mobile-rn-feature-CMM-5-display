declare namespace API {
  type RequestAPI<P = any, U = any> =
    | {
        success: true;
        payload: P;
      }
    | {
        success: false;
        error: U;
      };
}
