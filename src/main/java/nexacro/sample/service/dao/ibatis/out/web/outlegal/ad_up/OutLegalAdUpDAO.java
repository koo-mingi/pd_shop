package nexacro.sample.service.dao.ibatis.out.web.outlegal.ad_up;

import java.util.List;

import nexacro.sample.vo.out.web.outlegal.ad_up.OutLegalAdCostVO;
import nexacro.sample.vo.out.web.outlegal.ad_up.OutLegalAdUpVO;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;



@Repository("outLegalAdUpDAO")
public class OutLegalAdUpDAO extends EgovAbstractDAO {
	
	@SuppressWarnings("rawtypes")
	/* 자문의뢰 목록, 내용 조회 */
	public List selectOutLegaladvLawAdvWeb(OutLegalAdUpVO outLegalAdUpVO){	
		return list("outwebSQL.selectOutLegaladvLawAdvWeb",outLegalAdUpVO);
	}// selectOutLegaladvLawAdvWeb();
	
	public List selectOutLegaladvLawAdvWebDetail(OutLegalAdUpVO outLegalAdUpVO){	
		return list("outwebSQL.selectOutLegaladvLawAdvWebDetail",outLegalAdUpVO);
	}// selectOutLegaladvLawAdvWeb();
	
	
	
	/* 자문 회신 수정 */
	public int saveOutLegaladvLawAdvWeb(OutLegalAdUpVO outLegalAdUpVO){
		return update("outwebSQL.saveOutLegaladvLawAdvWeb",outLegalAdUpVO);
	}
	
	/* 자문비 조회 */
	public List selectOutLegaladvCostWeb(OutLegalAdCostVO outLegalAdCostVO){
		return list("outwebSQL.selectOutLegaladvCostWeb",outLegalAdCostVO);
	}
	
	/* 입력 */
	public void insertOutLegaladvCostWeb(OutLegalAdCostVO outLegalAdCostVO){
		insert("outwebSQL.insertOutLegaladvCostWeb",outLegalAdCostVO);			
	}

	/* 수정 */
	public int updateOutLegaladvCostWeb(OutLegalAdCostVO outLegalAdCostVO){
		return update("outwebSQL.updateOutLegaladvCostWeb",outLegalAdCostVO);
	}
	
	/* 삭제 */
	public int deleteOutLegaladvCostWeb(OutLegalAdCostVO outLegalAdCostVO){
		return delete("outwebSQL.deleteOutLegaladvCostWeb",outLegalAdCostVO);
	}
	
	/* 총 아이템 수 */
	public Object selectTotalItem(OutLegalAdUpVO outLegalAdUpVO){
		return selectByPk("outwebSQL.selectTotalItem",outLegalAdUpVO);
	}
}// class
