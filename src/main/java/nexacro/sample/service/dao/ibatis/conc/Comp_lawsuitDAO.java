package nexacro.sample.service.dao.ibatis.conc;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.conc.Comp_lawsuitVO;
import nexacro.sample.vo.conc.Judg_reportVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("Comp_lawsuitDAO")
public class Comp_lawsuitDAO extends NexacroIbatisAbstractDAO{

	@SuppressWarnings("unchecked")
	public List<Comp_lawsuitVO> getlawsuitInfo(Comp_lawsuitVO vo){
		System.out.println("야 여기다");
		return (List<Comp_lawsuitVO>) list("conc.Comp_lawsuitDAO.getlawsuitInfo", vo);
	}
	
	public List<Comp_lawsuitVO> getPladefInfo(Comp_lawsuitVO vo){
		return (List<Comp_lawsuitVO>) list("conc.Comp_lawsuitDAO.getPladefInfo", vo);
	}
	
	public int lawsuitUpdate1(Comp_lawsuitVO vo){
		return update("conc.Comp_lawsuitDAO.lawsuitUpdate1", vo);
	}
	public int lawsuitUpdate2(Comp_lawsuitVO vo){
		return update("conc.Comp_lawsuitDAO.lawsuitUpdate2", vo);
	}
	
	public int pladefUpdate(Comp_lawsuitVO vo){
		return update("conc.Comp_lawsuitDAO.pladefUpdate", vo);
	}
	
	// 원피고 Count 조회
		public List getPladeCountList(Comp_lawsuitVO vo) {
			return list("conc.Comp_lawsuitDAO.getPladeCountList", vo);
		}
		
		public void insertPladef(Comp_lawsuitVO vo){
			insert("conc.Comp_lawsuitDAO.insertPladef",vo);
		}
		
		public void updatePladef(Comp_lawsuitVO vo){
			update("conc.Comp_lawsuitDAO.updatePladef",vo);
		}
		public void deletePladef(Comp_lawsuitVO vo){
			delete("conc.Comp_lawsuitDAO.deletePladef", vo);
		}
		
		public void insertConc(Comp_lawsuitVO vo){
			insert("conc.Comp_lawsuitDAO.insertConc", vo);
		}

		public void updateConc(Comp_lawsuitVO vo){
			insert("conc.Comp_lawsuitDAO.updateConc", vo);
		}
		public void deleteConc(Comp_lawsuitVO vo){
			insert("conc.Comp_lawsuitDAO.deleteConc", vo);
		}
		
		// 소송대장번호 & 원피고구분코드 피고사항목록 조회 (원피고일련번호당)
		public List getPseqJudglist(Comp_lawsuitVO pladef) {
			return list("conc.Comp_lawsuitDAO.getPseqJudglist", pladef);
		}
		
		public List getinstanceListAll(Map<String, Object> selectMap) {
			// TODO Auto-generated method stub
			return list("conc.Comp_lawsuitDAO", selectMap);
		}
}
