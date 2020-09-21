package nexacro.sample.service.dao.ibatis.noti;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

import nexacro.sample.vo.depo.DepoVO;
import nexacro.sample.vo.lawsuit.Lawsuit_ListVO;
import nexacro.sample.vo.noti.LawsuitNotiVO;

@Repository("lawsuitnotiDAO")
public class LawsuitNotiDAO extends NexacroIbatisAbstractDAO {
	
	// 검색
	public List<LawsuitNotiVO> getLawsuitNotiList(LawsuitNotiVO lawsuitNotiVO) {
		return (List<LawsuitNotiVO>) list("noti.LawsuitNotiDAO.getLawsuitNotiList", lawsuitNotiVO);
	}
	// 저장
	public String insertLawsuitNoti(LawsuitNotiVO lawsuitNotiVO){
		insert("noti.LawsuitNotiDAO.insertLawsuitNoti", lawsuitNotiVO);
		String lawsuitNotiAdmNo = (String)lawsuitNotiVO.getLawsuitNotiAdmNo();
		System.out.println("lawsuitNotiNo ::::::"+lawsuitNotiAdmNo);
		return lawsuitNotiAdmNo;
	}
	public void updateLawsuitNoti(LawsuitNotiVO lawsuitNotiVO) {
		update("noti.LawsuitNotiDAO.updateLawsuitNoti", lawsuitNotiVO);		
	}
	public void deleteLawsuitNoti(LawsuitNotiVO lawsuitNotiVO) {
			delete("noti.LawsuitNotiDAO.deleteLawsuitNoti", lawsuitNotiVO);
	}
	// 소송고지 명세
		public List lawsuitNotiStatement(Map<String, Object>  selectMap) throws Exception {
		   return list("noti.LawsuitNotiDAO.lawsuitNotiStatement", selectMap);
		}
	
}
