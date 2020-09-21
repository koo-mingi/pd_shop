package nexacro.sample.service.dao.ibatis.comp;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.comp.LawsuitCompVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("compDao")
public class CompDao extends NexacroIbatisAbstractDAO{
	@SuppressWarnings("unchecked")
	public List<LawsuitCompVO> selectDsComp(Map<String, Object> objMap) {
		// TODO Auto-generated method stub
		return (List<LawsuitCompVO>) list("comp.selectDsComp", objMap);
	}
}
