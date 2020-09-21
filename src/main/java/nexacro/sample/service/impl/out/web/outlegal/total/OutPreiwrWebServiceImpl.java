package nexacro.sample.service.impl.out.web.outlegal.total;


import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.out.web.outlegal.total.OutPreiwrWebDao;
import nexacro.sample.service.out.web.outlegal.total.OutPreiwrWebService;
import nexacro.sample.vo.out.web.outlegal.total.OutLegalWebVo;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;


@Service("outPreiwrWebService")
public class OutPreiwrWebServiceImpl extends AbstractServiceImpl implements OutPreiwrWebService{

	@Resource(name = "outPreiwrWebDao")
	private OutPreiwrWebDao outPreiwrWebDao;
	
	//준비서면 기본사항
	
	public List getPreiwrListSelect(OutLegalWebVo outVO) {
		return outPreiwrWebDao.getPreiwrListSelect(outVO);
	}
	
	//준비서면 상세내역
	
	public List getPreiwrDetailListSelect(OutLegalWebVo outVO) {
		return outPreiwrWebDao.getPreiwrDetailListSelect(outVO);
	}
	
	//준비서면 상세내역(ajax)
	
	public List getPreiwrDetailList(OutLegalWebVo outVO) {
		return outPreiwrWebDao.getPreiwrDetailList(outVO);
	}
	
	//준비서면 입력
	
	public int preiwr_insert(OutLegalWebVo outVO) throws Exception {
		
		return outPreiwrWebDao.preiwr_insert(outVO);
	}
	
	//준비서면 수정
	
	public int preiwr_update(OutLegalWebVo outVO) throws Exception {
		
		return outPreiwrWebDao.preiwr_update(outVO);
	}
	
	//준비서면 삭제
	
	public int preiwr_delete(OutLegalWebVo outVO) throws Exception {
		
		return outPreiwrWebDao.preiwr_delete(outVO);
	}
	
	//준비서면 팝업
	
	public List LawNoSearch(OutLegalWebVo outVO) throws Exception {
		return outPreiwrWebDao.getLawNoSearch(outVO);
	}
	
	//준비서면목록 total count
	
	public int getTotalCount(OutLegalWebVo outVO) throws Exception {
		
		return outPreiwrWebDao.getTotalCount(outVO);
	}
	//준비서면 팝업 total count
	
	public int getTotalCountPop(OutLegalWebVo outVO) throws Exception {
		
		return outPreiwrWebDao.getTotalCountPop(outVO);
	}
	//준비서면 파일조회
	public List getPreFile(OutLegalWebVo outVO){
		return outPreiwrWebDao.getPreFile(outVO);
	}
		
	//준비서면 파일 total count
	
	public int getTotalCountFile(OutLegalWebVo outVO) throws Exception {
		
		return outPreiwrWebDao.getTotalCountFile(outVO);
	}
	
	//파일등록 입력
	
	public int getFileWrite(OutLegalWebVo outVO) throws Exception {
		
		return outPreiwrWebDao.getFileWrite(outVO);
	}
	
	//준비서면 첨부파일내역 등록
	
	public int insertFilePre(OutLegalWebVo outVO) throws Exception {
		
		return outPreiwrWebDao.insertFilePre(outVO);
	}
	
	//준비서면 파일삭제
	
	public int deletePreFile(OutLegalWebVo outVO) throws Exception {
		
		return outPreiwrWebDao.deletePreFile(outVO);
	}
}
