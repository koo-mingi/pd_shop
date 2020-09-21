package nexacro.sample.service.dao.ibatis.out;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.out.Law_fix_InfoVO;
import nexacro.sample.vo.out.OutLawNoSearchVO;
import nexacro.sample.vo.out.fixInfoInstanceVO;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("outlawsuitlistDao")
public class OutLawsuitListDao extends EgovAbstractDAO{
	
	//소송 리스트 조회
	public List<OutLawNoSearchVO> selectLawsuitList(Map<String, Object> ListMap){
		return (List<OutLawNoSearchVO>)list("out.Lawsuit.selectList", ListMap);
	}
	
	//소송 상세정보 조회
	public List<Law_fix_InfoVO> getLawsuitRecSelect(Law_fix_InfoVO law_fixinfoVo){
		return (List<Law_fix_InfoVO>)list("out.Law_fixinfo.getLawsuitRecSelect", law_fixinfoVo);
	}
	
	//소송 상세정보 조회
	public List<fixInfoInstanceVO> getInstanceList(fixInfoInstanceVO InstanceVO){
		return (List<fixInfoInstanceVO>)list("out.Law_fixinfo.getInstanceList", InstanceVO);
	}
	
	//기일정보 조회
	public List<Law_fix_InfoVO>getLawFixinfoSelect(Law_fix_InfoVO lawfixinfoVo){
		return (List<Law_fix_InfoVO>)list("out.Law_fixinfo.getLawFixinfoSelect", lawfixinfoVo);
	}
	
	//기일정보 insert
	public void insertFixinfo(Law_fix_InfoVO law_fixinfoVo){
		insert("out.Law_fixinfo.insertFixinfo", law_fixinfoVo);
	}
	
	//기일정보 update
	public void updateFixinfo(Law_fix_InfoVO law_fixinfoVo){
		update("out.Law_fixinfo.updateFixinfo", law_fixinfoVo);
	}
	
	//기일정보 delete
	public void deleteFixinfo(Law_fix_InfoVO law_fixinfoVo){
		delete("out.Law_fixinfo.deleteFixinfo", law_fixinfoVo);
	}
	
	//기일정보 insert
	public void insertFixinfo2(Law_fix_InfoVO law_fixinfoVo){
		insert("out.Law_fixinfo.insertFixinfo2", law_fixinfoVo);
	}
	

	
}
