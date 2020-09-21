package nexacro.sample.service.dao.ibatis.com;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.com.ComCodeVO;
import nexacro.sample.vo.com.DetailCodeVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("codeDAO")
public class CodeDAO extends NexacroIbatisAbstractDAO {
	
	// 공통코드 전체내역 조회하기
	public List<ComCodeVO> selectCode(ComCodeVO comCodeVO){
		return (List<ComCodeVO>)list("common.selectCode", comCodeVO);
	}
	
	// 분류별 코드번호 또는 코드네임 가져오기
	public List<ComCodeVO> detailCode(Map<String, String> switchMap){
		return (List<ComCodeVO>)list("common.detailCode", switchMap);
	}
	
	// 코드마스터 삽입
	public void insertCode(ComCodeVO comCodeVO){
		insert("common.insertCode", comCodeVO);
	}
	
	// 코드마스터 수정
	public void updateCode(ComCodeVO comCodeVO){
		update("common.updateCode", comCodeVO);
	}
	
	// 코드마스터 삭제
	public void deleteCode(ComCodeVO comCodeVO){
		delete("common.deleteCode", comCodeVO);
	}
	
	// 상세코드 분류코드 가져오기
	public List<DetailCodeVO> selectDetailCode(){
		return (List<DetailCodeVO>)list("common.selectDetailCode");
	}
	
	// 분류코드에 따른 상세코드 가져오기
	public List<DetailCodeVO> selectDetailList(DetailCodeVO detailCodeVO){
		return (List<DetailCodeVO>)list("common.selectDetailList", detailCodeVO);
	}
	
	// 상세코드 삽입
	public void insertDetailCode(DetailCodeVO detailCodeVO){
		insert("common.insertDetailCode", detailCodeVO);
	}
	
	// 상세코드 수정
	public void updateDetailCode(Map<String, Object> detailCodeMap){
		update("common.updateDetailCode", detailCodeMap);
	}
	
	// 상세코드 삭제
	public void deleteDetailCode(DetailCodeVO detailCodeVO){
		delete("common.deleteDetailCode", detailCodeVO);
	}
	
}
