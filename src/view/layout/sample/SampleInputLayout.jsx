import React, { useState } from 'react';

const SampleInputLayout = () => {
  const defaultBenefitInfo = {
    bnftCd: '',
    bnftNm: '',
    prvdStdAmt: '',
    prvdRatio: '',
    maxPrvdAmt: '',
    searchStrtDate: '',
    searchEndDate: '',
    useYn: ''
  };
  const [benefitInfo, setBenefitInfo] = useState(defaultBenefitInfo);

  const onInsert = () => {
    console.log('등록합니다 => ', benefitInfo);
  };

  const onUpdate = () => {
    console.log('수정합니다 => ', benefitInfo);
  };

  const onClear = () => {
    setBenefitInfo(defaultBenefitInfo);
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBenefitInfo({ ...benefitInfo, isFetch: false, isClear: false, [name]: value });
  };

  return (
    <>
      <div className="row mgb5">
        <div className="col-xl-12 text-right">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-primary waves-effect waves-themed" onClick={onInsert}>
              <i className="fal fa-plus mr-1"></i> 등록
            </button>
            <button type="button" className="btn btn-sm btn-dark waves-effect waves-themed" onClick={onUpdate}>
              <i className="fal fa-eraser mr-1"></i> 수정
            </button>
            <button type="button" className="btn btn-sm btn-dark waves-effect waves-themed" onClick={onClear}>
              <i className="fal fa-times mr-1"></i> 초기화
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div id="panel-5" className="panel">
            <div className="panel-hdr">
              <h2>기본혜택 정보</h2>
              <div className="panel-toolbar">
                <button className="btn btn-panel waves-effect waves-themed" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="창 최소"></button>
                <button className="btn btn-panel waves-effect waves-themed" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="창 최대"></button>
              </div>
            </div>
            <div className="panel-container show">
              <div className="panel-content">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group row">
                      <label className="col-form-label col-12 col-lg-4 form-label text-lg-right">
                        <span className="req">*</span>혜택구분
                      </label>
                      <div className="col-12 col-lg-8 ">
                        <select className="form-control form-control-sm" name="bnftCd" value={benefitInfo.bnftCd} onChange={onChange}>
                          <option>선택</option>
                          <option>최초가입</option>
                          <option>최초결제</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="form-group row">
                      <label className="col-form-label col-12 col-lg-2 form-label text-lg-right">
                        <span className="req">*</span>혜택명
                      </label>
                      <div className="col-12 col-lg-10 ">
                        <input type="text" id="simpleinput1" className="form-control form-control-sm" name="bnftNm" value={benefitInfo.bnftNm} onChange={onChange} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 hr-line"></div>
                  <div className="col-sm-4">
                    <div className="form-group row">
                      <label className="col-form-label col-12 col-lg-4 form-label text-lg-right">지급기준금액</label>
                      <div className="col-12 col-lg-8 ">
                        <input type="text" id="simpleinput2" className="form-control form-control-sm text-right" name="prvdStdAmt" value={benefitInfo.prvdStdAmt} onChange={onChange} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group row">
                      <label className="col-form-label col-12 col-lg-4 form-label text-lg-right">지급률</label>
                      <div className="col-12 col-lg-8 ">
                        <input type="text" id="simpleinput3" className="form-control form-control-sm text-right" name="prvdRatio" value={benefitInfo.prvdRatio} onChange={onChange} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group row">
                      <label className="col-form-label col-12 col-lg-4 form-label text-lg-right">
                        <span className="req">*</span>최대지급금액
                      </label>
                      <div className="col-12 col-lg-8 ">
                        <input type="text" id="simpleinput4" className="form-control form-control-sm text-right" name="maxPrvdAmt" value={benefitInfo.maxPrvdAmt} onChange={onChange} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 hr-line"></div>
                  <div className="col-sm-4">
                    <div className="form-group row">
                      <label className="col-form-label col-12 col-lg-4 form-label text-lg-right">
                        <span className="req">*</span>시작일자
                      </label>
                      <div className="col-12 col-lg-8 ">
                        <div className="input-group input-group-sm">
                          <input type="text" className="form-control " placeholder="서비스시작일" name="searchStrtDate" value={benefitInfo.searchStrtDate} onChange={onChange} />
                          <div className="input-group-append">
                            <span className="input-group-text fs-xl">
                              <i className="fal fa-calendar-check"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group row">
                      <label className="col-form-label col-12 col-lg-4 form-label text-lg-right">
                        <span className="req">*</span>종료일자
                      </label>
                      <div className="col-12 col-lg-8 ">
                        <div className="input-group input-group-sm">
                          <input type="text" className="form-control " placeholder="서비스종료일" name="searchEndDate" value={benefitInfo.searchEndDate} onChange={onChange} />
                          <div className="input-group-append">
                            <span className="input-group-text fs-xl">
                              <i className="fal fa-calendar-check"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group row">
                      <label className="col-form-label col-12 col-lg-4 form-label text-lg-right">
                        <span className="req">*</span>사용여부
                      </label>
                      <div className="col-12 col-lg-8 ">
                        <select className="form-control form-control-sm" name="useYn" value={benefitInfo.useYn} onChange={onChange}>
                          <option>선택</option>
                          <option>Y</option>
                          <option>N</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SampleInputLayout;
