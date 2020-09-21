package nexacro.sample.service.stats;

import java.util.List;

import nexacro.sample.vo.stats.StatsDoneVO;
import nexacro.sample.vo.stats.StatsSearchDoneVO;
import nexacro.sample.vo.stats.StatsSearchVO;
import nexacro.sample.vo.stats.StatsVO;

public interface StatsService {

	//소송 미결 현황 목록
	public List getStatsListSelect(StatsSearchVO ds_search_key);
	public List<StatsDoneVO> getStatsDoneListSelect(StatsSearchDoneVO ds_search_key);
	
}
