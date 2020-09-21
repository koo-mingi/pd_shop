package nexacro.sample.service.dao.ibatis.administrator;

import java.util.Map;

import nexacro.sample.vo.administrator.AdmVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;


@Repository("admDao")
public class AdmDao extends NexacroIbatisAbstractDAO{

	// 로그인
	public AdmVO selectLogin(Map<String, String> loginMap){
		return (AdmVO)select("administrator.admlogin", loginMap);
	}
	
	// 존재하는 아이디인지 조회
	public AdmVO selectId(String id){
		return (AdmVO)select("administrator.selectid", id);
		//AdmVO에 id 값이 담기지 않는다?!
	}
	
	//법률관계자 로그인
	public AdmVO selectOutLogin(Map<String, String> outloginMap){
		return (AdmVO) select("administrator.outlogin", outloginMap);
	}
	
	//법률관계자 존재하는 NO인지 조회
	public AdmVO selectLyrNo(String id){
		return (AdmVO) select("administrator.selectlyrno",id);
	}

	// 회원가입
		public void insertAdm(AdmVO admVO){
			insert("administrator.admInsert", admVO);
		}
}
