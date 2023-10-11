import Row from 'common/view/layout/default/Row';
import React, { useEffect, useState } from 'react';

const data = [
  { groupCd: 'BC', grpMchtNo: '5012345', grpMchtNm: '파리바게트', grpYn: 'Y' },
  { groupCd: 'KB', grpMchtNo: '1234567', grpMchtNm: '베스킨라빈스', grpYn: 'Y' },
  { groupCd: 'NH', grpMchtNo: '1478352', grpMchtNm: '뚜레쥬르', grpYn: 'N' },
  { groupCd: 'BC', grpMchtNo: '1236548', grpMchtNm: '던킨도너츠', grpYn: 'Y' }
];

const SampleListLayout = ({ searchInfo }) => {
  const [itemList, setItemList] = useState([]);

  const fetch = () => {
    setItemList(data);
  };

  useEffect(() => {
    if (searchInfo.isFetch) {
      fetch();
    } else if (searchInfo.isClear) {
      setItemList([]);
    }
  }, [searchInfo]);

  return (
    <Row>
      <div className="col-xl-12">
        <div id="panel-4" className="panel">
          <div className="panel-hdr">
            <h2>
              그룹가맹점 목록{' '}
              <small className="mgl20">
                <i>
                  총 <strong className="color-danger-900">0건</strong>이 검색되었습니다.
                </i>
              </small>
            </h2>
            <div className="panel-toolbar">
              <button className="btn btn-panel waves-effect waves-themed" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="창 최소"></button>
              <button className="btn btn-panel waves-effect waves-themed" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="창 최대"></button>
            </div>
          </div>
          <div className="panel-container show">
            <div className="panel-content">
              <div className="row">
                <div className="col-xl-12">
                  <div id="dt-basic-example_wrapper" className="dataTables_wrapper dt-bootstrap4">
                    <div className="row">
                      <div className="col-sm-12">
                        <table id="dt-basic-example" className="table table-bordered table-hover table-striped w-100 nav-row dataTable dtr-inline" role="grid" aria-describedby="dt-basic-example_info">
                          <thead>
                            <tr role="row">
                              <th className="sorting_asc" tabIndex="0" aria-controls="dt-basic-example" aria-sort="ascending" aria-label="No.: activate to sort column descending">
                                No.
                              </th>
                              <th className="sorting" tabIndex="0" aria-controls="dt-basic-example" aria-label="구분: activate to sort column ascending">
                                구분
                              </th>
                              <th className="sorting" tabIndex="0" aria-controls="dt-basic-example" aria-label="그룹가맹점번호: activate to sort column ascending">
                                그룹가맹점번호
                              </th>
                              <th className="sorting" tabIndex="0" aria-controls="dt-basic-example" aria-label="그룹가맹점명: activate to sort column ascending">
                                그룹가맹점명
                              </th>
                              <th className="sorting" tabIndex="0" aria-controls="dt-basic-example" aria-label="SPC그룹가맹점여부: activate to sort column ascending">
                                SPC그룹가맹점여부
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {itemList.length ? (
                              itemList.map((item, idx) => {
                                return (
                                  <tr role="row" className="odd" key={idx}>
                                    <td className="text-center sorting_1" tabIndex="0">
                                      {idx + 1}
                                    </td>
                                    <td className="text-center">{item.groupCd}</td>
                                    <td className="text-center">{item.grpMchtNo}</td>
                                    <td>{item.grpMchtNm}</td>
                                    <td>{item.grpYn}</td>
                                  </tr>
                                );
                              })
                            ) : (
                              <tr>
                                <td className="text-center" colSpan="5">
                                  검색 데이터가 없습니다.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <div className="dataTables_info" id="dt-basic-example_info" role="status" aria-live="polite">
                          Showing 1 to 3 of 3 entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div className="dataTables_paginate paging_simple_numbers" id="dt-basic-example_paginate">
                          <ul className="pagination">
                            <li className="paginate_button page-item previous disabled" id="dt-basic-example_previous">
                              <a href="#" aria-controls="dt-basic-example" data-dt-idx="0" tabIndex="0" className="page-link">
                                <i className="fal fa-chevron-left"></i>
                              </a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a href="#" aria-controls="dt-basic-example" data-dt-idx="1" tabIndex="0" className="page-link">
                                1
                              </a>
                            </li>
                            <li className="paginate_button page-item next disabled" id="dt-basic-example_next">
                              <a href="#" aria-controls="dt-basic-example" data-dt-idx="2" tabIndex="0" className="page-link">
                                <i className="fal fa-chevron-right"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default SampleListLayout;
