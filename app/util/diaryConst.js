class diaryConst {
    /**
     * ホーム画面
     */
  
    static get CATEGORY_DATA() {
      return {
        DATE     : "date",
        MEMO     : "memo",
        CATEGORY : "category"
      }
    }
  
    static get CATEGORY_DEFAULT() {
      return {
        KEY   : 0,
        VALUE : "メモ"
      }
    }
  
    static get SCREEN_TITLE() {
      return {
        REGISTER : "メモ登録",
        CALENDAR : "カレンダー"
      }
    }
    static get BUTTON_TITLE() {
      return {
        REGISTER : "登録"
      }
    }
  }
  
  export default DiaryConst;