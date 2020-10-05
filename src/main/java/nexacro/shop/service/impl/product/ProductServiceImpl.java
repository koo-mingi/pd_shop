package nexacro.shop.service.impl.product;

import java.util.List;
import java.util.Map;

import nexacro.shop.service.dao.mybatis.ProductMapper;
import nexacro.shop.service.product.ProductService;
import nexacro.shop.vo.product.ProductVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductMapper mapper;
	
	@Override
	public List<ProductVO> getProductList(Map<String, String> productMap) {
		return mapper.getProductList(productMap);
	}
	
}
