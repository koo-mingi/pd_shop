package nexacro.sample.web.out.web.login;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import nexacro.sample.service.out.web.login.OutWebLoginService;
import nexacro.sample.vo.out.web.login.OutWebLoginVO;
import nexacro.sample.web.out.web.json.ConvertJson;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class OutWebLoginController {
	@Resource(name="outWebLoginService")
	private OutWebLoginService outWebLoginService;
	
	@RequestMapping("index.do")
	public String index(HttpSession session){
		session.invalidate();
		return "login";
	}
	
	/* 최초접속시 로그인 페이지-로컬: http://127.0.0.1:8080/ */
	@RequestMapping("outWebLogin.do")
	public String outWebLogin(){		
		return "out/login_form";
	}// outWebLogin()
	
	/* 로그인 체크 */
	@RequestMapping("outWebLoginCheck.do")
	public void outWebLoginCheck(HttpServletResponse response, HttpSession session, Map outWebLoginMap, ConvertJson convertJson){
		
		List list = outWebLoginService.selectOutWebLoginCheck(outWebLoginMap);
				
		String jsonStr = "";
		convertJson.setList(list, outWebLoginMap);
		
		if(list.size()>0){
			
			Map map = (Map) list.get(0);
			
			String outid = (String) map.get("legalOfficialinfoRelaNo");
			String outname = (String) map.get("legalOfficialinfoLyrName");
			
			session.setAttribute("outid",outid);
			session.setAttribute("outname",outname);
		}
		
		jsonStr = convertJson.getJsonStr();
		
		try {
			response.getWriter().print(jsonStr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}// outWebLoginCheck()
	
	// logout
	@RequestMapping(value = "getLogout.do")
	public ModelAndView getLogout(HttpSession session,HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		session.invalidate();
		mav.setViewName("redirect:/index.do"); 
		return mav;
	}
	
	
	
}// class
