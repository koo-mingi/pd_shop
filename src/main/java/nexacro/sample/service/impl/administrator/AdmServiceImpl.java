package nexacro.sample.service.impl.administrator;

import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.administrator.AdmService;
import nexacro.sample.service.dao.ibatis.administrator.AdmDao;
import nexacro.sample.util.Sha256;
import nexacro.sample.vo.administrator.AdmVO;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


@Service("admService")
public class AdmServiceImpl extends EgovAbstractServiceImpl implements AdmService {
	
	@Resource(name = "admDao")
	private AdmDao admDao;
	
	// 로그인
	@Override
	public AdmVO selectLogin(Map<String, String> loginMap) {
		
		AdmVO admVO = new AdmVO();
		
		admVO = admDao.selectId(loginMap.get("id"));
		
		if(admVO.getInsaId().equals("NONE") || admVO.getInsaId() == null){
			admVO.setMsg("none");
			return admVO;
		}else{
			admVO = admDao.selectLogin(loginMap);
			
			if(admVO != null){
				
				String insertPwd = loginMap.get("pwd");
				String dbPwd = admVO.getInsaPwd();
				
				if(!Sha256.encrypt(dbPwd).equals(Sha256.encrypt(insertPwd))){
					admVO.setMsg("password");
				}else{
					admVO.setMsg("ok");
				}
			}
			return admVO;
		}
	}
	
	// 존재하는 아이디인지 검색
	@Override
	public AdmVO selectId(String id) {
		AdmVO admVO = admDao.selectId(id);
		
		if(admVO.getInsaId().equals("NONE") || admVO.getInsaId() == null){
			admVO.setMsg("none");
		}
		return admVO;
	}
	
	//법률관계자 로그인
	@Override
	public AdmVO selectOutLogin(Map<String, String> outloginMap) {
		
		AdmVO admVO = new AdmVO();
		
		admVO = admDao.selectLyrNo(outloginMap.get("id"));
		
		if(admVO.getInsaSabun().equals("NONE") || admVO.getInsaSabun() == null){
			admVO.setMsg("none");
			return admVO;
		}else{
			admVO = admDao.selectOutLogin(outloginMap);
			
			if(admVO != null){
				
				String insertPwd = outloginMap.get("pwd");
				String dbPwd = admVO.getInsaPwd();
				
				if(!Sha256.encrypt(dbPwd).equals(Sha256.encrypt(insertPwd))){
					admVO.setMsg("password");
				}else{
					admVO.setMsg("ok");
				}
			}
			return admVO;
		}
	}
	
	//법률관계자 NO 조회
	@Override
	public AdmVO selectLyrNo(String id) {
		
		AdmVO admVO = admDao.selectLyrNo(id);
		
		if(admVO.getInsaSabun().equals("NONE") || admVO.getInsaSabun()==null){
			admVO.setMsg("none");
		}
		
		return admVO;
	}
	
	// 회원가입
	@Override
	public void insertAdm(AdmVO admVO) {
		
		admVO.setInsaPwd(Sha256.encrypt(admVO.getInsaPwd()));
		
		admDao.insertAdm(admVO);
		
	}
}//end class
