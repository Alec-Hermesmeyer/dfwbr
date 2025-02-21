interface FareHarborWindow extends Window {
    FH?: {
      open?: Record<string, unknown>
    }
  }
  
  declare global {
    interface Window extends FareHarborWindow {}
  }
  
  export {}
  