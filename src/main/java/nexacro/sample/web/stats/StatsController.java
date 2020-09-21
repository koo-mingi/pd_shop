package nexacro.sample.web.stats;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.stats.StatsService;
import nexacro.sample.vo.stats.StatsDoneVO;
import nexacro.sample.vo.stats.StatsSearchDoneVO;
import nexacro.sample.vo.stats.StatsSearchVO;
import nexacro.sample.vo.stats.StatsVO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class StatsController {

	private static final Logger log = LoggerFactory
			.getLogger(StatsController.class);
	
	@Resource(name = "statsservice")
	private StatsService statsservice;
	
	@Resource
	private Validator validator;

	@InitBinder
	public void initBinder(WebDataBinder dataBinder) {
		dataBinder.setValidator(this.validator);
	}
	
	@RequestMapping(value = "/stats/getStatsListSelect.do")
	public NexacroResult getStatsListSelect(@ParamDataSet(name = "ds_search_key") StatsSearchVO ds_search_key){

		List statsList = statsservice.getStatsListSelect(ds_search_key);
	
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("ds_stats", statsList);
		
		return result;
	}
	
	@RequestMapping(value = "/stats/getStatsDoneListSelect.do")
	public NexacroResult getStatsDoneListSelect(@ParamDataSet(name = "ds_search_key") StatsSearchDoneVO ds_search_key){
		
		log.info(ds_search_key.getSearchdatemin());
		log.info(ds_search_key.getSearchdatemax());
		
		List<StatsDoneVO> statsDoneList = statsservice.getStatsDoneListSelect(ds_search_key);
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("ds_stats", statsDoneList);
		
		return result;
	}
}
