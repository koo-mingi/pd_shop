package nexacro.sample.service.impl.out.web.outlegal.total;



import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.out.web.outlegal.total.OutEdocAdmWebDAO;
import nexacro.sample.service.out.web.outlegal.total.OutEdocAdmWebService;
import nexacro.sample.vo.out.web.outlegal.total.OutLegalWebVo;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;

@Service("outEdocAdmWebService")
public class OutEdocAdmWebServiceImpl extends AbstractServiceImpl implements OutEdocAdmWebService {
	
	@Resource(name = "outEdocAdmWebDAO")
	private OutEdocAdmWebDAO outEdocAdmWebDAO;
	
	//소송정보
	
	public List getLawsuitInfo(OutLegalWebVo outVO) {
		return outEdocAdmWebDAO.getLawsuitInfo(outVO);
	}
	
	//갑호증 목록
	
	public List getEdocAdmList1(OutLegalWebVo outVO) {
		return outEdocAdmWebDAO.getEdocAdmList1(outVO);
	}
	//을호증목록
	
	public List getEdocAdmList2(OutLegalWebVo outVO) {
		return outEdocAdmWebDAO.getEdocAdmList2(outVO);
	}
	
	//서증관리 상세내역(ajax)
	
	public OutLegalWebVo getEdocAdmDetailList(OutLegalWebVo outVO) {
		return outEdocAdmWebDAO.getEdocAdmDetailList(outVO);
	}
		
	//첨부파일 조회
	
	public List getAddFile(OutLegalWebVo outVO) {
		return outEdocAdmWebDAO.getAddFileList(outVO);
	}
	
	/** 소송관리번호 검색 **/
	//소송관리번호 검색
	
	public List LawNoSearch(OutLegalWebVo outVO) throws Exception {
		return outEdocAdmWebDAO.getLawNoSearch(outVO);
	}
	
	//첨부파일 count
	
	public int getTotalCount(OutLegalWebVo outVO) throws Exception {
		
		return outEdocAdmWebDAO.getTotalCount(outVO);
	}
	// count
	
	public int getTotalCount1(OutLegalWebVo outVO) throws Exception {
		
		return outEdocAdmWebDAO.getTotalCount1(outVO);
	}
	// count
	
	public int getTotalCount2(OutLegalWebVo outVO) throws Exception {
		
		return outEdocAdmWebDAO.getTotalCount2(outVO);
	}
	
	//서증관리 저장
	
	public int edocAdmInsert(OutLegalWebVo outVO) {
		
		return outEdocAdmWebDAO.edocAdmInsert(outVO);
	}
	
	//서증관리 수정
	
	public int edocAdmUpdate(OutLegalWebVo outVO) {
		
		return outEdocAdmWebDAO.edocAdmUpdate(outVO);
	}
		
	//서증관리 저장
	
	public int edocAdmDelete(OutLegalWebVo outVO) {
		
		return outEdocAdmWebDAO.edocAdmDelete(outVO);
	}	
	//파일등록
	@Transactional
	public int getFileWrite(OutLegalWebVo outVO) throws Exception {
		
		return outEdocAdmWebDAO.getFileWrite(outVO);
	}
	//파일등록
	@Transactional
	public int insertFileEdoc(OutLegalWebVo outVO) throws Exception {
		
		return outEdocAdmWebDAO.insertFileEdoc(outVO);
	}
	
	//서증관리 파일삭제
	
	public int deleteEdocFile(OutLegalWebVo outVO) throws Exception {
		
		return outEdocAdmWebDAO.deleteEdocFile(outVO);
	}
}