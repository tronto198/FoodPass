export interface httpRequest {
    userId : number;
    data : object;      //reqType의 req~~들
};
  
  
export interface httpResponse{
    result : boolean,
    data : object,      //reqType의 res~~들
    reason? : string,   //실패한 이유
}
  
//이건 서버용 아님
export interface httpError{
    data? : object,
    reason : string
}