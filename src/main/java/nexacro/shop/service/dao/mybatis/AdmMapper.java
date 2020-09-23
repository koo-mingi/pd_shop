package nexacro.shop.service.dao.mybatis;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import nexacro.shop.vo.administrator.AdmVO;

//@Repository("admDao")
public interface AdmMapper {
	public AdmVO admlogin(Map<String, String> loginMap);
	public AdmVO selectId(String id);
	public int admInsert(AdmVO admVO);
}
