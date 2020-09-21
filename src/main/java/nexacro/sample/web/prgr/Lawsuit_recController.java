package nexacro.sample.web.prgr;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.prgr.Lawsuit_recService;
import nexacro.sample.vo.prgr.Lawsuit_recVO;
import nexacro.sample.vo.prgr.MediationVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.NexacroException;
import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class Lawsuit_recController {
	
	
	@Resource(name = "lawsuit_recService")
	private Lawsuit_recService lawsuit_recService;
	
	
	// 기본정보 조회 ( 심급 )
		@RequestMapping(value = "/lawsuit_rec/getLawsuitRecSelect.do")
		public NexacroResult getLawsuitRecSelect(
				@ParamDataSet(name = "ds_search", required = false) Lawsuit_recVO searchVO) {

			List<Lawsuit_recVO> lawsuit_recList = lawsuit_recService.getLawsuitRecSelect(searchVO);

			NexacroResult result = new NexacroResult();
			result.addDataSet("ds_lawsuit", lawsuit_recList);

			return result;
		}
		
		// 기본정보 조회 ( 원피고 )
		@RequestMapping(value = "/lawsuit_rec/getLawsuitRecPladefSelect.do")
		public NexacroResult getLawsuitRecPladefSelect(
				@ParamDataSet(name = "ds_search", required = false) Lawsuit_recVO searchVO) {

					List<Lawsuit_recVO> lawsuit_recList = lawsuit_recService.getLawsuitRecPladefSelect(searchVO);

					NexacroResult result = new NexacroResult();
					result.addDataSet("ds_pladef", lawsuit_recList);

					return result;
				}
		
		
		// 재판외화해 상세 조회 
		@RequestMapping(value = "/lawsuit_rec/getLawsuitRecDetailSelect.do")
				public NexacroResult getLawsuitRecDetailSelect(
						@ParamDataSet(name = "ds_search", required = false) Lawsuit_recVO searchVO) {

							List<Lawsuit_recVO> lawsuit_recList = lawsuit_recService.getLawsuitRecDetailSelect(searchVO);

							NexacroResult result = new NexacroResult();
							result.addDataSet("ds_reconcil", lawsuit_recList);
							
							return result;
		}
		
		//재판의화해 삽입 삭제 갱신
		@RequestMapping(value = "/lawsuit_rec/createReconcil.do")
		public NexacroResult createReconcil(
				@ParamDataSet(name = "ds_reconcil") List<Lawsuit_recVO> ds_reconcil,
				@ParamVariable(name = "lawsuitAdmNo", required=false) String lawsuitAdmNo,
				@ParamVariable(name = "instAdmCode", required=false) String instAdmCode,
				@ParamVariable(name = "pladefSepCode", required=false) String pladefSepCode,
				@ParamVariable(name = "pladefSeq", required=false) String pladefSeq){
			
			int size = ds_reconcil.size();
			System.out.println(size);
			
			Lawsuit_recVO vo = null;
			
			for(int i = 0 ; i < size; i++){
				vo = ds_reconcil.get(i);
				vo.setLawsuitAdmNo(lawsuitAdmNo);
				vo.setInstAdmCode(instAdmCode);
				vo.setPladefSepCode(pladefSepCode);
				vo.setPladefSeq(pladefSeq);
				ds_reconcil.set(i, vo);
			}
			
			lawsuit_recService.createReconcil(ds_reconcil);
			
			NexacroResult result = new NexacroResult();
			
			return result;
		}
		
		
		//재판의화해 삽입 삭제 갱신
			@RequestMapping(value = "/lawsuit_rec/createReconcil2.do")
			public NexacroResult createReconcil2(
					@ParamVariable(name = "lawsuitAdmNo", required=false) String lawsuitAdmNo,
					@ParamVariable(name = "instAdmCode", required=false) String instAdmCode,
					@ParamVariable(name = "pladefSepCode", required=false) String pladefSepCode,
					@ParamVariable(name = "pladefSeq", required=false) String pladefSeq,
					@ParamVariable(name = "reconcilReqChg") String reconcilReqChg,
					@ParamVariable(name = "reconcilAppvChg") String reconcilAppvChg,
					@ParamVariable(name = "reconcilMgrOpin") String reconcilMgrOpin,
					@ParamVariable(name = "reconcilAppvDate") String reconcilAppvDate,
					@ParamVariable(name = "reconcilExptjudgChg") String reconcilExptjudgChg,
					@ParamVariable(name = "reconcilAppvId", required=false) String reconcilAppvId,
					@ParamVariable(name = "reconcilTempSaveWtr", required=false) String reconcilTempSaveWtr,
					@ParamVariable(name = "reconcilAppvName", required=false) String reconcilAppvName
					){

				
				Lawsuit_recVO vo = new Lawsuit_recVO();
				vo.setLawsuitAdmNo(lawsuitAdmNo);
				vo.setInstAdmCode(instAdmCode);
				vo.setPladefSepCode(pladefSepCode);
				vo.setPladefSeq(pladefSeq);
				vo.setReconcilReqChg(reconcilReqChg);
				vo.setReconcilAppvChg(reconcilAppvChg);
				vo.setReconcilMgrOpin(reconcilMgrOpin);
				vo.setReconcilAppvDate(reconcilAppvDate);
				vo.setReconcilExptjudgChg(reconcilExptjudgChg);
				vo.setReconcilAppvId(reconcilAppvId);
				vo.setReconcilTempSaveWtr(reconcilTempSaveWtr);
				vo.setReconcilAppvName(reconcilAppvName);

				lawsuit_recService.createReconcil2(vo);
				
				
				NexacroResult result = new NexacroResult();
				
				return result;
			}
}

		
		
		
	
