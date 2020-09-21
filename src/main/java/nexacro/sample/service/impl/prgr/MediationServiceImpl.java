package nexacro.sample.service.impl.prgr;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.prgr.MediationDAO;
import nexacro.sample.service.prgr.MediationService;
import nexacro.sample.vo.prgr.MediationVO;
import nexacro.sample.vo.prgr.SimVO;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

@Service("mediationService")
public class MediationServiceImpl implements MediationService {

	@Resource(name = "mediationDao")
	private MediationDAO mediationDao;

	// 기본사항조회
	@Override
	public List<MediationVO> mediationSelect(Map<String, Object> selectMap) {
		// TODO Auto-generated method stub
		return mediationDao.mediationSelect(selectMap);
	}

	// 원피고조회
	@Override
	public List<MediationVO> pladefSelect(Map<String, Object> selectMap) {
		// TODO Auto-generated method stub
		return mediationDao.pladefSelect(selectMap);
	}

	// 조정안조회
	@Override
	public List<MediationVO> bottomSearch(Map<String, Object> selectMap) {
		// TODO Auto-generated method stub
		return mediationDao.bottomSearch(selectMap);
	}

	// 최대 심급 조회
	@Override
	public List<SimVO> getSimInfo(Map<String, Object> selectMap) {
		// TODO Auto-generated method stub
		return mediationDao.getSimInfo(selectMap);
	}
	
	// 저장, 수정, 삭제
	@Override
	public String mediationSave(List<MediationVO> MediationVO) {
		// TODO Auto-generated method stub
		String confirm = null;
		int size = MediationVO.size();
		
		for (int i = 0; i < size; i++) {
			MediationVO mediationVO = MediationVO.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) mediationVO;
			
			if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED) {
				mediationDao.mediationSave(mediationVO);
//				confirm = mediationDao.selectMediationSeq(mediationVO);
			} else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
				Map<String, Object> detailMap = new HashMap<String, Object>();
				detailMap.put("lawsuitAdmNo", MediationVO.get(0).getLawsuitAdmNo());
				detailMap.put("instAdmCode", MediationVO.get(0).getInstAdmCode());
				mediationDao.mediationUpdate(mediationVO);
				detailMap.clear();
				//confirm = "수정";
			} else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED) {
				mediationDao.mediationDelect(mediationVO);
			}

		}
		return confirm;
	}

	@Override
	public String getCount(List<MediationVO> voList) {
		String aprvCheck=""; // 리턴 변수
		
//		HashMap voMap = (HashMap<String, Object>) voObject;
//		List getCount = (List) voMap.get("normal"); 
		
		MediationVO vo = new MediationVO(); // vo 선언
		String[] maxCheck = new String[voList.size()]; // 로우 수만큼 배열 생성  (확인용)
		
		int  nCount= 0; // 진행 갯수
		int  xCount= 0; // 진행 안된 갯수 
        
		for (int i = 0; i < voList.size(); i++) {
			
			vo = (MediationVO) voList.get(i); 
			
            String temp = mediationDao.getCount(vo); // 쿼리 실행 결과 받는 변수
           
            maxCheck[i] = temp; // 결과값을 배열에 담는다 (확인용)
            
            // 전체 결재내역 확인
	        if( temp == null){   // 결재를 안했을 경우
	            
	            xCount++;
	            
	        }else if( Integer.parseInt(temp) == 1){  // 결재가 진행중
	               
	            nCount++;
	              
	        }else if( Integer.parseInt(temp) == 0 ){ // 결재가 끝났을 경우
	          
	        }
	        
		}
		
		// 마지막 조정안의 결과값 확인
		vo = (MediationVO) voList.get(0); 
		String lastTemp = mediationDao.getLastCount(vo);
		
		if( lastTemp == null ){  //결재를 안했을 경우 
			
			aprvCheck = voList.size()+"&"+nCount+"&"+xCount+"&"+"X";
			
		}else if(Integer.parseInt( lastTemp ) ==1 ){ // 반려일 경우
			
			aprvCheck = voList.size()+"&"+nCount+"&"+xCount+"&"+"Z";
			
		}else{  // 결재가 끝났을 경우, 결재가 진행중인 경우
			
			aprvCheck = voList.size()+"&"+nCount+"&"+xCount+"&"+"Y";
		}
		
		String temp ="";
		for(String x : maxCheck ){temp+=" "+x+",";}
		System.out.println("@@@@@ 쿼리 리턴값: "+ temp+" and "+lastTemp); 
		System.out.println("@@@@@ 최종 리턴 값: "+ aprvCheck); 
		
		return aprvCheck;
	}
	
	
	


}
