package nexacro.sample.web.prgr;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.prgr.Law_fixinfoService;
import nexacro.sample.vo.prgr.Law_fixinfoVO;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class Law_fixinfoController {
	
	
	@Resource(name = "law_fixinfoService")
	private Law_fixinfoService law_fixinfoService;
	
	
	// 소송기본사항(조회)
		@RequestMapping(value = "/law_fixinfo/getLawsuitRecSelect.do")
		public NexacroResult getLawsuitRecSelect(
				@ParamDataSet(name = "ds_search", required = false) Law_fixinfoVO searchVO) {

			List<Law_fixinfoVO> law_fixinfoList = law_fixinfoService.getLawsuitRecSelect(searchVO);

			NexacroResult result = new NexacroResult();
			result.addDataSet("ds_output", law_fixinfoList);

			return result;
		}
		
		
	// 기일정보(조회)
		@RequestMapping(value = "/law_fixinfo/getLawFixinfoSelect.do")
		public NexacroResult getLawFixinfoSelect(
				@ParamDataSet(name = "ds_search", required = false) Law_fixinfoVO searchVO) {

			List<Law_fixinfoVO> law_fixinfoList = law_fixinfoService.getLawFixinfoSelect(searchVO);

			NexacroResult result = new NexacroResult();
			result.addDataSet("ds_output", law_fixinfoList);

			return result;
		}	
		
	
	//기일정보(등록삭제수정)
			@RequestMapping(value = "/lawsuit_rec/getLawFixinfoCud.do")
			public NexacroResult getLawFixinfoCud(
					@ParamDataSet(name = "ds_search") List<Law_fixinfoVO> searchVO){
				
				law_fixinfoService.getLawFixinfoCud(searchVO);
				
				NexacroResult result = new NexacroResult();
				
				return result;
			}
		

}

		
