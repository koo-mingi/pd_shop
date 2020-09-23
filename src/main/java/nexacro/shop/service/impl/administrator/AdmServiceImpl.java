package nexacro.shop.service.impl.administrator;

import java.util.Map;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import nexacro.shop.util.Sha256;
import nexacro.shop.service.administrator.AdmService;
import nexacro.shop.service.dao.mybatis.AdmMapper;
import nexacro.shop.vo.administrator.AdmVO;

@Service("admService")
public class AdmServiceImpl implements AdmService {
	
	//@Resource(name = "admDao")
	@Autowired
	private AdmMapper admDao;

	@Override
	public AdmVO admlogin(Map<String, String> loginMap) {
		AdmVO admVO = new AdmVO();
		
		String id = loginMap.get("id");
		admVO = admDao.selectId(id);
		
		if(admVO.getId().equals("NONE") || admVO.getId() == null){
			admVO.setMsg("none");
			return admVO;
		}else{
			admVO = admDao.admlogin(loginMap);
			
			if(admVO != null){
				
				String insertPwd = loginMap.get("pwd");
				String dbPwd = admVO.getPassword();
				String adminYn = admVO.getPos_gbn_code();
				
				if(adminYn.equals("001") || adminYn.equals("002")){
					if(!Sha256.encrypt(dbPwd).equals(Sha256.encrypt(insertPwd))){
						admVO.setMsg("password");
					}else{
						admVO.setMsg("ok");
					}
				}else{
					if(!dbPwd.equals(Sha256.encrypt(insertPwd))){
						admVO.setMsg("password");
					}else{
						admVO.setMsg("ok");
					}
				}
			}
			return admVO;
		}
	}

	@Override
	public AdmVO selectId(String id) {
		AdmVO admVO = admDao.selectId(id);
		
		if(admVO.getId().equals("NONE") || admVO.getId() == null){
			admVO.setMsg("none");
		}
		return admVO;
	}

	@Override
	public int admInsert(AdmVO admVO) {
		
		// 비밀번호 암호화
		// admVO.setPassword(Sha256.encrypt(admVO.getPassword()));
		
		return admDao.admInsert(admVO);
	}

}
