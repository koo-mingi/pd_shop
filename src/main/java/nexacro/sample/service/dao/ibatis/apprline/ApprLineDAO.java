package nexacro.sample.service.dao.ibatis.apprline;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

import nexacro.sample.vo.apprline.ApprInsaVO;
import nexacro.sample.vo.apprline.ApprLineVO;
import nexacro.sample.vo.depo.DepoVO;
import nexacro.sample.vo.lawsuit.Lawsuit_ListVO;
import nexacro.sample.vo.noti.LawsuitNotiVO;

@Repository("apprlineDAO")
public class ApprLineDAO extends NexacroIbatisAbstractDAO {

	// 결재라인조회
	public List getApprovalLineList() {

		return list("apprline.ApprLineDAO.approvalLineList");
	}

	// 결재라인조회
	public List getApprovalLineListCode(Object vo) {
		System.out.println("line dao");
		return list("apprline.ApprLineDAO.approvalLineListCode", vo);
	}

	// 결재라인조회
	public List getApprLineDetailList(Object vo) {

		return list("apprLine.ApprLineDAO.apprLineDetailList", vo);
	}

	// 사원조회
	public List getApprovalList(Map<String, Object> param) {
		System.out.println("dao");
		return list("apprLine.ApprLineDAO.approvalList", param);
	}
	

	//결재라인삭제
	public int deleteAppr(Map<String, Object> param) {

		 return delete("apprLine.ApprLineDAO.apprDelete", param);
	 }
	
	// 저장
		public void appInsert(ApprLineVO appr){
			System.out.println("insert");
			insert("apprLine.ApprLineDAO.appInsert", appr);
		}
		public void apprUpdate(ApprLineVO appr) {
			System.out.println("apprUpdate");
			update("apprLine.ApprLineDAO.apprUpdate", appr);		
		}
}
