package nexacro.sample.service.impl.out.web.outlegal.total;




import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.out.web.outlegal.total.OutLegalWebDao;
import nexacro.sample.service.out.web.outlegal.total.OutLegalWebService;
import nexacro.sample.vo.out.web.outlegal.total.OutLegalWebVo;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;



@Service("outLegalWebService")
public class OutLegalWebServiceImpl extends AbstractServiceImpl implements OutLegalWebService{
	
	@Resource(name = "outLegalWebDao")
	private OutLegalWebDao outLegalWebDao;
	
	//법률자문 검색
	
	public List getOutList(OutLegalWebVo outVO) throws Exception {
		return outLegalWebDao.getOutList(outVO);
	}
	
	// 법률자문 상세조회
	
	public List getDetail(OutLegalWebVo outVO) throws Exception {
		return outLegalWebDao.getDetail(outVO);
	}

	
	//자문비내역 저장
	public int costInsert(OutLegalWebVo outVO) throws Exception{
		
		return outLegalWebDao.costInsert(outVO);
	}
	
	//자문비내역 수정
	public int costUpdate(OutLegalWebVo outVO) throws Exception{
		
		return outLegalWebDao.costUpdate(outVO);
	}
	
	//자문비내역 삭제
	public int costDelete(OutLegalWebVo outVO) throws Exception{
		
		return outLegalWebDao.costDelete(outVO);
	}

	//수정 -- 법률자문회신사항
	
	public int createOut(OutLegalWebVo outVO) throws Exception {
		
		return	outLegalWebDao.updateOut(outVO);
	}
	
	//자문비내역 검색
	
	public List getCostList(OutLegalWebVo outVO) throws Exception {
		return outLegalWebDao.getCostList(outVO);
	}
	
	//자문비내역 상세내역(ajax)
	
	public OutLegalWebVo getLegalAdReDetailList(OutLegalWebVo outVO) {
		return outLegalWebDao.getLegalAdReDetailList(outVO);
	}
   
	// 법률자문 total count
	
	public int getTotalCount(OutLegalWebVo outVO) throws Exception {
		
		return outLegalWebDao.getTotalCount(outVO);
	}

}
