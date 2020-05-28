export interface httpRequest {
    userId : number;
    reqType: string,
    data : object
};
  
  
export interface httpResponse{
    result : boolean,
    data : object,
    reason? : string,
}
  
export interface httpError{
    data? : object,
    reason : string
}