package nexacro.sample.service.dao.ibatis.stats;

import java.util.List;

import nexacro.sample.vo.stats.StatsDoneVO;
import nexacro.sample.vo.stats.StatsSearchDoneVO;
import nexacro.sample.vo.stats.StatsSearchVO;
import nexacro.sample.vo.stats.StatsVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("statsDAO")
public class StatsDAO extends NexacroIbatisAbstractDAO{
	
	@SuppressWarnings("rawtypes")
	public List getStatsListSelect(StatsSearchVO ds_search_key){
		return  list("stats.statsDAO.getStatsListSelect", ds_search_key);
	}

	@SuppressWarnings("rawtypes")
	public List<StatsDoneVO> getStatsDoneListSelect(
			StatsSearchDoneVO ds_search_key) {
		// TODO Auto-generated method stub
		return (List<StatsDoneVO>) list("stats.statsDAO.getStatsDoneListSelect", ds_search_key);
	}
	
}
