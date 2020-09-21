package nexacro.sample.web.administrator;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.administrator.AdmService;
import nexacro.sample.vo.administrator.AdmVO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class AdmController {
	
	private static final Logger logger = LoggerFactory.getLogger(AdmController.class);
	
	@Resource(name = "admService")
	private AdmService admService;
	
	// 로그인 체크
	@RequestMapping(value = "administrator/login.do")
	public NexacroResult logincheck(
				@ParamVariable(name = "id") String id,
				@ParamVariable(name = "pwd") String pwd) {
		
		Map<String, String> loginMap = new HashMap<String, String>();
		loginMap.put("id", id);
		loginMap.put("pwd", pwd);
		
		AdmVO admVO = admService.selectLogin(loginMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", admVO);
		logger.info("logincheck 잘 작동하는지 확인");
		
		return result;
	}
	
	// 존재하는 아이디인지 검색
	@RequestMapping(value = "administrator/selectId.do")
	public NexacroResult selectId(
			@ParamVariable(name = "id") String id){
		
		AdmVO admVO = admService.selectId(id);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", admVO);
		
		return result;
	}
	
	// 법률관계자 로그인 체크
	@RequestMapping(value = "administrator/outLogin.do")
	public NexacroResult outLogincheck(
				@ParamVariable(name = "id") String id,
				@ParamVariable(name = "pwd") String pwd) {
		
		Map<String, String> loginMap = new HashMap<String, String>();
		loginMap.put("id", id);
		loginMap.put("pwd", pwd);
		
		AdmVO admVO = admService.selectOutLogin(loginMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", admVO);
		logger.info("outLogincheck 잘 작동하는지 확인");
		
		return result;
	}
	
	// 회원가입
	@RequestMapping(value = "administrator/insertAdm.do")
	public NexacroResult inserAdm(
			@ParamDataSet(name = "ds_input", required = false) AdmVO admVO){
		
		admService.insertAdm(admVO);
		
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	
}
