package nexacro.sample.service.out.web.outlegal.total;


import java.util.List;

import nexacro.sample.vo.out.web.outlegal.total.CodeWebVO;
import nexacro.sample.vo.out.web.outlegal.total.OutFixinfoWebVO;
import nexacro.sample.vo.out.web.outlegal.total.OutLawNoSearchWebVO;


public interface OutFixinfoWebService {
	
	//기일정보관리 팝업 total COUNT
	int getlawNoTotalCount(OutLawNoSearchWebVO lawNoVO) throws Exception;
	
	//기일관리 팝업 소송번호 검색
    List getlawNoList(OutLawNoSearchWebVO lawNoVO) throws Exception;
  
    // 코드 세팅
    List getCode(CodeWebVO vo) throws Exception;
    //CodeVO getCode(CodeVO vo) throws Exception;
    
    // 기일정보 기본 조회 (소송,심급)
//    OutFixinfoLawWebVO getLawList(OutFixinfoWebVO fixVO) throws Exception;
    Object getLawList(OutFixinfoWebVO fixVO) throws Exception;
    
    // 기일정보 total COUNT
    int getFixinfoTotalCount(OutFixinfoWebVO fixVO) throws Exception;
    
    // 기일관리 기본 조회( 기일정보 )
    List getFixinfoList(OutFixinfoWebVO fixVO) throws Exception;
    
    // 기일관리 상세 조회( 기일정보)
    Object getFixinfoDetail(OutFixinfoWebVO fixVO) throws Exception;
    
    // 심급 count
    List getInstanceList(String lawsuitAdmNo) throws Exception;
    
    // 기일관리 입력
    int insertFixinfo(OutFixinfoWebVO fixVO) throws Exception;
    
     // 기일관리 수정
    int updateFixinfo(OutFixinfoWebVO fixVO) throws Exception;
    
    // 기일 삭제
    int deleteFixinfo(OutFixinfoWebVO fixVO) throws Exception;
}