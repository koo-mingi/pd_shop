
package nexacro.sample.service.dao.ibatis.lawsuit;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import nexacro.sample.vo.lawsuit.Lawsuit_ListVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("lawsuitlistDAO")
public class Lawsuit_ListDAO extends EgovAbstractDAO {
	//공통코드호출

		public List<Lawsuit_ListVO> selectCode(Map<String, Object> ListMap) {
			return (List<Lawsuit_ListVO>)list("lawsuit.Lawsuit_ListDAO.selectCode", ListMap);
		}
		
		public List<Lawsuit_ListVO> getLawsuitDetail(Map<String, Object> ListMap) {
			return (List<Lawsuit_ListVO>)list("lawsuit.Lawsuit_ListDAO.getLawsuitDetail", ListMap);
		}
	
		public List<Lawsuit_ListVO> getInstanceDetail(Map<String, Object> ListMap) {
			return (List<Lawsuit_ListVO>)list("lawsuit.Lawsuit_ListDAO.getInstanceDetail", ListMap);
		}
		
		public List<Lawsuit_ListVO> getLawsuitStatus(Map<String, Object> ListMap) {
			return (List<Lawsuit_ListVO>)list("lawsuit.Lawsuit_ListDAO.getLawsuitStatus", ListMap);
		}
		
		public List<Lawsuit_ListVO> getinstanceListAll(Map<String, Object> ListMap) {
			return (List<Lawsuit_ListVO>)list("lawsuit.Lawsuit_ListDAO.getinstanceListAll", ListMap);
		}
		
		public List<Lawsuit_ListVO> getPlaDefDetail(Map<String, Object> ListMap) {
			return (List<Lawsuit_ListVO>)list("lawsuit.Lawsuit_ListDAO.getPlaDefDetail", ListMap);
		}
		
		public List<Lawsuit_ListVO> getApprovalLineList(Map<String, Object> ListMap) {
			return (List<Lawsuit_ListVO>)list("lawsuit.Lawsuit_ListDAO.getApprovalLineList", ListMap);
		}
		public List<Lawsuit_ListVO> getMgrList(Map<String, Object> ListMap) {
			return (List<Lawsuit_ListVO>)list("lawsuit.Lawsuit_ListDAO.getMgrList", ListMap);
		}
		public List<Lawsuit_ListVO> getMgrSelect(Map<String, Object> ListMap) {
			return (List<Lawsuit_ListVO>)list("lawsuit.Lawsuit_ListDAO.getMgrSelect", ListMap);
		}
		public void insertLawsuitMgr(Lawsuit_ListVO ListVO) {
			insert("lawsuit.Lawsuit_ListDAO.insertLawsuitMgr", ListVO);
		}
		public int updateLawsuitMgr(Lawsuit_ListVO ListVO) {
			return update("lawsuit.Lawsuit_ListDAO.updateLawsuitMgr", ListVO);
		}
		public int updateAddLawsuit(Lawsuit_ListVO ListVO) {
			return update("lawsuit.Lawsuit_ListDAO.updateAddLawsuit", ListVO);
		}
		// 소제기 의뢰 번호 당사 피고 조회
		public List<Lawsuit_ListVO> getLawNotiNoSearch(Map<String, Object> ListMap) {
			return (List<Lawsuit_ListVO>)list("lawsuit.Lawsuit_ListDAO.getLawNotiNoSearch", ListMap);
		}
		// 당담 판사 조회
		public List<Lawsuit_ListVO> getLegalOfficials(Map<String, Object> ListMap) {
			return (List<Lawsuit_ListVO>)list("lawsuit.Lawsuit_ListDAO.getLegalOfficials", ListMap);
		}
		public List<Lawsuit_ListVO> getNewAdmNo(Map<String, Object> ListMap) {
			return (List<Lawsuit_ListVO>)list("lawsuit.Lawsuit_ListDAO.getNewAdmNo", ListMap);
		}
		// 소송접수관리 저장.
		public String insertLawsuitAll(Lawsuit_ListVO ListVO) {
			insert("lawsuit.Lawsuit_ListDAO.insertLawsuitAll", ListVO);
			return ListVO.getLawsuitAdmNo();
		}
		public int updateLawsuitAll(Lawsuit_ListVO ListVO) {
			return update("lawsuit.Lawsuit_ListDAO.updateLawsuitAll", ListVO);
		}
		public void insertInstanceAll(Lawsuit_ListVO ListVO) {
			insert("lawsuit.Lawsuit_ListDAO.insertInstanceAll", ListVO);
		}
		public int updateInstanceAll(Lawsuit_ListVO ListVO) {
			return update("lawsuit.Lawsuit_ListDAO.updateInstanceAll", ListVO);
		}
		public void insertPladefAll(Lawsuit_ListVO ListVO) {
			insert("lawsuit.Lawsuit_ListDAO.insertPladefAll", ListVO);
		}
		public int updatePladefAll(Lawsuit_ListVO ListVO) {
			return update("lawsuit.Lawsuit_ListDAO.updatePladefAll", ListVO);
		}
		public int deletePladefAll(Lawsuit_ListVO ListVO) {
			return delete("lawsuit.Lawsuit_ListDAO.deletePladefAll", ListVO);
		}
		/*@SuppressWarnings("rawtypes")
		public List getLawsuitDetail(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getLawsuitDetail", lawsuitlistVO);
		}

		@SuppressWarnings("rawtypes")
		public List getLawsuitList(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getLawsuitList", lawsuitlistVO);
		}
		
		public void insertLawsuit(Map<String, Object> map)throws Exception {
			// TODO Auto-generated method stub
			insert("lawsuit.Lawsuit_ListDAO.insertLawsuit", map);
		}

		public int updateLawsuit(Map<String, Object> map)throws Exception {
			// TODO Auto-generated method stub
			return update("lawsuit.Lawsuit_ListDAO.updateLawsuit", map);
		}

		public int deleteLawsuit(Map<String, Object> map)throws Exception {
			// TODO Auto-generated method stub
			return delete("lawsuit.Lawsuit_ListDAO.deleteLawsuit", map);
		}
		
		public void insertLawsuitAll(Map<String, Object> map)throws Exception {
			// TODO Auto-generated method stub
			insert("lawsuit.Lawsuit_ListDAO.insertLawsuitAll", map);
		}
		
		public int updateLawsuitAll(Map<String, Object> map)throws Exception {
			// TODO Auto-generated method stub
			return update("lawsuit.Lawsuit_ListDAO.updateLawsuitAll", map);
		}
		
		@SuppressWarnings("rawtypes")
		public List getLawsuitAllDetail(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getLawsuitAllDetail", lawsuitlistVO);
		}
		
		public void insertInstanceAll(Map<String, Object> map)throws Exception {
			// TODO Auto-generated method stub
			insert("lawsuit.Lawsuit_ListDAO.insertInstanceAll", map);
		}
		
		public int updateInstanceAll(Map<String, Object> map)throws Exception {
			// TODO Auto-generated method stub
			return update("lawsuit.Lawsuit_ListDAO.updateInstanceAll", map);
		}
		
		public int updateAddLawsuit(Map<String, Object> map)throws Exception {
			// TODO Auto-generated method stub
			return update("lawsuit.Lawsuit_ListDAO.updateAddLawsuit", map);
		}
		
		public void insertPladefAll(Map<String, Object> map)throws Exception {
			// TODO Auto-generated method stub
			insert("lawsuit.Lawsuit_ListDAO.insertPladefAll", map);
		}
		
		public int updatePladefAll(Map<String, Object> map)throws Exception {
			// TODO Auto-generated method stub
			return update("lawsuit.Lawsuit_ListDAO.updatePladefAll", map);
		}
		
		public int deletePladefAll(Map<String, Object> map)throws Exception {
			// TODO Auto-generated method stub
			return delete("lawsuit.Lawsuit_ListDAO.deletePladefAll", map);
		}
		
		@SuppressWarnings("rawtypes")
		public List getLawsuitNo(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getLawsuitNo", lawsuitlistVO);
		}
		
		@SuppressWarnings("rawtypes")
		public List getLawsuitStatus(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getLawsuitStatus", lawsuitlistVO);
		}
		
		@SuppressWarnings("rawtypes")
		public List selectCode(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.selectCode", lawsuitlistVO);
		}
		
		@SuppressWarnings("rawtypes")
		public List getInstanceDetail(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getInstanceDetail", lawsuitlistVO);
		}
		
		@SuppressWarnings("rawtypes")
		public List getinstanceListAll(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getinstanceListAll", lawsuitlistVO);
		}
		
		@SuppressWarnings("rawtypes")
		public List getPlaDefDetail(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getPlaDefDetail", lawsuitlistVO);
		}
		
		@SuppressWarnings("rawtypes")
		public List getApprovalLineList(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getApprovalLineList", lawsuitlistVO);
		}
		
		@SuppressWarnings("rawtypes")
		public List getLegalOfficials(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getLegalOfficials", lawsuitlistVO);
		}
		
		@SuppressWarnings("rawtypes")
		public List getMgrSelect(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getMgrSelect", lawsuitlistVO);
		}
		
		public void insertLawsuitMgr(Map<String, Object> map)throws Exception {
			// TODO Auto-generated method stub
			insert("lawsuit.Lawsuit_ListDAO.insertLawsuitMgr", map);
		}
		
		public int updateLawsuitMgr(Map<String, Object> map)throws Exception {
			// TODO Auto-generated method stub
			return update("lawsuit.Lawsuit_ListDAO.updateLawsuitMgr", map);
		}
		
		@SuppressWarnings("rawtypes")
		public List getMgrList(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getMgrList", lawsuitlistVO);
		}
		
		@SuppressWarnings("rawtypes")
		public List getLawNotiNoSearch(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getLawNotiNoSearch", lawsuitlistVO);
		}
		
		@SuppressWarnings("rawtypes")
		public List getNewAdmNo(Lawsuit_ListVO lawsuitlistVO) {
			return list("lawsuit.Lawsuit_ListDAO.getNewAdmNo", lawsuitlistVO);
		}*/

		public String getLawsuitNo() {
			return ("lawsuit.Lawsuit_ListDAO.getLawsuitNo");
		}
}
