package nexacro.sample.service.dao.ibatis.out;

import java.util.List;

import nexacro.sample.vo.out.OutEdocAdmVo;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("EdocAdmDao")
public class OutEdocAdmDao extends EgovAbstractDAO {

	//소송정보 조회
	@SuppressWarnings("unchecked")
	public List<OutEdocAdmVo> getLawsuitSelect(OutEdocAdmVo searchVo){
		return(List<OutEdocAdmVo>) list("getLawsuitInfo", searchVo);
	}
	
	//호증정보 조회
	@SuppressWarnings("unchecked")
	public List<OutEdocAdmVo> getEdocAdmInfoGap(OutEdocAdmVo searchVo){
		return (List<OutEdocAdmVo>)list("getEdocAdmListGap", searchVo);
	}

	//호증정보 조회
	@SuppressWarnings("unchecked")
	public List<OutEdocAdmVo> getEdocAdmInfoEul(OutEdocAdmVo searchVo){
		return (List<OutEdocAdmVo>)list("getEdocAdmListEul", searchVo);
	}
	
	//호증정보 insert
	public void OutEdocAdmInsert(OutEdocAdmVo edocVo){
		insert("edocAdmInsert", edocVo);
	}
	
	//호증정보 update
	public void OutEdocAdmUpdate(OutEdocAdmVo edocVo){
		update("edocAdmUpdate", edocVo);
	}
	
	//호증정보 delete
	public void OutEdocAdmDelete(OutEdocAdmVo edocVo){
		delete("edocAdmDelete", edocVo);
	}
}
