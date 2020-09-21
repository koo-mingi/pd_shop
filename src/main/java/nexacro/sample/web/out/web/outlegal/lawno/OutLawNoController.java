package nexacro.sample.web.out.web.outlegal.lawno;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import nexacro.sample.service.out.web.outlegal.lawno.OutLawNoService;
import nexacro.sample.vo.out.web.outlegal.lawno.OutLawNoVO;
import nexacro.sample.web.out.web.json.ConvertJson;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class OutLawNoController {

	
	@Resource(name="outLawNoService")
	private OutLawNoService outLawNoService;
	
	
	/* 소송관리번호로 조회 */
	@RequestMapping("outLawsuitAdmNoSelectWeb.do")
	public void outLawsuitAdmNoSelectWeb(HttpSession session, HttpServletResponse response, OutLawNoVO outLawNoVO, ConvertJson convertJson) throws IOException{
		
		outLawNoVO.setInstAdmEntLyrId((String)session.getAttribute("outid"));
		
		List list = outLawNoService.outLawsuitAdmNoSelectWeb(outLawNoVO);
		
		String jsonStr = "";
		
		convertJson.setList(list, outLawNoVO);	
		jsonStr = convertJson.getJsonStr();
		
		response.getWriter().print(jsonStr);
		
	}// outLawsuitAdmNoSelectWeb()
	
	
	/* 기일정보 조회 */
	@RequestMapping("selectOutFixInfo.do")
	public void selectOutFixInfo(HttpSession session, HttpServletResponse response, OutLawNoVO outLawNoVO, ConvertJson convertJson) throws IOException{
		
		outLawNoVO.setInstAdmEntLyrId((String)session.getAttribute("outid"));
		
		List list = outLawNoService.selectOutFixInfo(outLawNoVO);
		
		String jsonStr = "";
		
		convertJson.setList(list, outLawNoVO);	
		jsonStr = convertJson.getJsonStr();
		
		response.getWriter().print(jsonStr);
		
	}// selectOutInstAdmCode()
	
	
}
