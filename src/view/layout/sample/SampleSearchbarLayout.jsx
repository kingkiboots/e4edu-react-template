import React, { useEffect, useState } from 'react';

const SampleSearchbarLayout = (props) => {
  const defaultSearchInfo = {
    bnftCd: '',
    bnftNm: '',
    searchStrtDate: '',
    searchEndDate: '',
    isFetch: false,
    isClear: false
  };
  const [searchInfo, setSearchInfo] = useState(defaultSearchInfo);

  useEffect(() => {
    props.setSearchInfo(searchInfo);
  }, [searchInfo]);

  const onSearch = () => {
    setSearchInfo({ ...searchInfo, isFetch: true, isClear: false });
  };

  const onClear = () => {
    setSearchInfo({ ...defaultSearchInfo, isClear: true });
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearchInfo({ ...searchInfo, isFetch: false, isClear: false, [name]: value });
  };

  return (
    <div className="search-content">
      <table className="w100p">
        <tbody>
          <tr>
            <td className="w90p">
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group row">
                    <label className="col-form-label col-12 col-lg-4 form-label text-lg-right">혜택구분</label>
                    <div className="col-12 col-lg-8">
                      <select className="form-control form-control-sm" name="bnftCd" value={searchInfo.bnftCd} onChange={onChange}>
                        <option>전체</option>
                        <option value="frstJoin">최초가입</option>
                        <option value="frstPay">최초결제</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group row">
                    <label className="col-form-label col-12 col-lg-4 form-label text-lg-right">혜택명</label>
                    <div className="col-12 col-lg-8">
                      <input type="text" className="form-control form-control-sm" placeholder="" name="bnftNm" value={searchInfo.bnftNm} onChange={onChange} />
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group row">
                    <label className="col-form-label col-12 col-lg-3 form-label text-lg-right">검색기간</label>
                    <div className="col-12 col-lg-4 p-0">
                      <div className="input-group input-group-sm">
                        <input type="text" className="form-control " placeholder="시작일자" name="searchStrtDate" value={searchInfo.searchStrtDate} onChange={onChange} />
                        <div className="input-group-append">
                          <span className="input-group-text fs-xl">
                            <i className="fal fa-calendar-check"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-1 text-center pdt5">~</div>
                    <div className="col-12 col-lg-4 p-0">
                      <div className="input-group input-group-sm">
                        <input type="text" className="form-control " placeholder="종료일자" name="searchEndDate" value={searchInfo.searchEndDate} onChange={onChange} />
                        <div className="input-group-append">
                          <span className="input-group-text fs-xl">
                            <i className="fal fa-calendar-check"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td className="w10p text-right">
              <div className="btn-group">
                <button className="btn btn-sm btn-info  waves-effect waves-themed" type="button" onClick={onSearch}>
                  <i className="fal fa-search"></i>&nbsp;&nbsp;조회
                </button>
                <button className="btn btn-sm btn-dark  waves-effect waves-themed" type="button" onClick={onClear}>
                  <i className="fal fa-times" title="초기화"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SampleSearchbarLayout;
