package nexacro.sample.service.impl.out.web.outlegal.ad_up;


import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.out.web.outlegal.ad_up.OutLegalAdUpDAO;
import nexacro.sample.service.out.web.outlegal.ad_up.OutLegalAdUpService;
import nexacro.sample.vo.out.web.outlegal.ad_up.OutLegalAdCostVO;
import nexacro.sample.vo.out.web.outlegal.ad_up.OutLegalAdUpVO;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;

@Service("outLegalAdUpService")
public class OutLegalAdUpServiceImpl extends AbstractServiceImpl implements OutLegalAdUpService {

	@Resource(name="outLegalAdUpDAO")
	private OutLegalAdUpDAO outLegalAdUpDAO;

	/* 자문의뢰 목록, 내용 조회 */
	public List selectOutLegaladvLawAdvWeb(OutLegalAdUpVO outLegalAdUpVO) {
		return outLegalAdUpDAO.selectOutLegaladvLawAdvWeb(outLegalAdUpVO);
	}

	public List selectOutLegaladvLawAdvWebDetail(OutLegalAdUpVO outLegalAdUpVO) {
		return outLegalAdUpDAO.selectOutLegaladvLawAdvWebDetail(outLegalAdUpVO);
	}
	
	/* 자문 회신 수정 */
	public int saveOutLegaladvLawAdvWeb(OutLegalAdUpVO outLegalAdUpVO) {
		return outLegalAdUpDAO.saveOutLegaladvLawAdvWeb(outLegalAdUpVO);
	}
	
	/* 자문비 조회 */
	public List selectOutLegaladvCostWeb(OutLegalAdCostVO outLegalAdCostVO) {
		return outLegalAdUpDAO.selectOutLegaladvCostWeb(outLegalAdCostVO);
	}

	/* 자문비 입력, 수정, 삭제 */
	public int saveOutLegaladvCostWeb(OutLegalAdCostVO outLegalAdCostVO) {
		int x = 2;
		
		String gbParam = outLegalAdCostVO.getGbParam();
		System.out.println("===================================>   "+gbParam);
		
		if(gbParam.equals("insert")){
			outLegalAdUpDAO.insertOutLegaladvCostWeb(outLegalAdCostVO);
			x = 3;
		}else if(gbParam.equals("update")){
			x = outLegalAdUpDAO.updateOutLegaladvCostWeb(outLegalAdCostVO);
			x = x+10;
		}else if(gbParam.equals("delete")){
			x = outLegalAdUpDAO.deleteOutLegaladvCostWeb(outLegalAdCostVO);
		}else{
			x=404;
		}
		
		return x;
	}

	/* 총 아이템 수 */
	public Object selectTotalItem(OutLegalAdUpVO outLegalAdUpVO) {
		// TODO Auto-generated method stub
		return outLegalAdUpDAO.selectTotalItem(outLegalAdUpVO);
	}


	
	
	
	
	
	
}
