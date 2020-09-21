package nexacro.sample.service.impl.out.web.outlegal.total;



import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.out.web.outlegal.total.OutFixinfoWebDAO;
import nexacro.sample.service.out.web.outlegal.total.OutFixinfoWebService;
import nexacro.sample.vo.out.web.outlegal.total.CodeWebVO;
import nexacro.sample.vo.out.web.outlegal.total.OutFixinfoWebVO;
import nexacro.sample.vo.out.web.outlegal.total.OutLawNoSearchWebVO;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;

@Service("outFixinfoWebService")
public class OutFixinfoWebServiceImpl extends AbstractServiceImpl implements OutFixinfoWebService {
		
	
	@Resource(name = "outFixinfoWebDAO")
	private OutFixinfoWebDAO outFixinfoWebDAO;
    
	 // 코드 세팅
	
	public List getCode(CodeWebVO vo) throws Exception {

		return outFixinfoWebDAO.getCode(vo);
	}
	
	
	public List getInstanceList(String lawsuitAdmNo) {
		return outFixinfoWebDAO.getInstanceList(lawsuitAdmNo);
	}
	
	// 기일관리 팝업 total count
	
	public int getlawNoTotalCount(OutLawNoSearchWebVO lawNoVO) throws Exception {
		
		return outFixinfoWebDAO.getlawNoTotalCount(lawNoVO);
	}
    
	// 기일 관리 팝업 소송번호 조회
	
	public List getlawNoList(OutLawNoSearchWebVO lawNoVO) throws Exception {
		
		return outFixinfoWebDAO.getlawNoList(lawNoVO);
	}

	// 기일관리 기본 조회 ( 소송, 심급 )
	
	public Object getLawList(OutFixinfoWebVO fixVO) throws Exception{
		System.out.println("@@@@@@@@@@@@@@@@@@@@@ impl");
		return outFixinfoWebDAO.getLawList(fixVO);
	}
	
	// 기일관리  total count
	
	public int getFixinfoTotalCount(OutFixinfoWebVO fixVO) throws Exception {
		
		return outFixinfoWebDAO.getFixinfoTotalCount(fixVO);
	}
	
	// 기일관리 기본 조회 ( 기일)
	
	public List getFixinfoList(OutFixinfoWebVO fixVO) {
		return outFixinfoWebDAO.getFixinfoList(fixVO);
	}

	// 기일정보 상세 조회 ( 기일)
	
	public Object getFixinfoDetail(OutFixinfoWebVO fixVO) throws Exception {
		
		return outFixinfoWebDAO.getFixinfoDetail(fixVO);
	}
    
	// 기일정보 입력
	@Transactional
	public int insertFixinfo(OutFixinfoWebVO fixVO) throws Exception {

		outFixinfoWebDAO.insertFixinfo( fixVO);
		return 0;
	}

	// 기일 수정
	@Transactional
	public int updateFixinfo(OutFixinfoWebVO fixVO) throws Exception {

		outFixinfoWebDAO.updateFixinfo( fixVO);
		return 0;
	}
   
	// 기일 삭제
	
	public int deleteFixinfo(OutFixinfoWebVO fixVO) throws Exception {
		
		outFixinfoWebDAO.deleteFixinfo( fixVO);
		return 0;
	}
	
}