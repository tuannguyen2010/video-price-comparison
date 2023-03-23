exports.mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };
  
  exports.mockRequest = () => {
    const req = {};
    req.params = jest.fn().mockReturnValue(req);
    return req;
  };
