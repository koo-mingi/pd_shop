package nexacro.sample.service.impl.stats;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import nexacro.sample.service.dao.ibatis.stats.StatsDAO;
import nexacro.sample.service.stats.StatsService;
import nexacro.sample.vo.stats.StatsDoneVO;
import nexacro.sample.vo.stats.StatsSearchDoneVO;
import nexacro.sample.vo.stats.StatsSearchVO;
import nexacro.sample.vo.stats.StatsVO;

@Service("statsservice")
public class StatsServiceImpl implements StatsService {

	@Resource(name = "statsDAO")
	private StatsDAO statsDAO;
	
	@Override
	public List getStatsListSelect(StatsSearchVO ds_search_key) {
		// TODO Auto-generated method stub
		return statsDAO.getStatsListSelect(ds_search_key);
	}

	@Override
	public List<StatsDoneVO> getStatsDoneListSelect(
			StatsSearchDoneVO ds_search_key) {
		// TODO Auto-generated method stub
		return statsDAO.getStatsDoneListSelect(ds_search_key);
	}

}
