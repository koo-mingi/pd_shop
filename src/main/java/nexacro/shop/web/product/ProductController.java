package nexacro.shop.web.product;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;






import nexacro.shop.service.product.ProductService;
import nexacro.shop.vo.product.ProductVO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class ProductController {
	private static final Logger log = LoggerFactory
			.getLogger(ProductController.class);
	

	@Autowired
	private ProductService service;

	@Resource
	private Validator validator;

	@InitBinder
	public void initBinder(WebDataBinder dataBinder) {
		dataBinder.setValidator(this.validator);
	}
	
	// 상품검색
	@RequestMapping(value = "/product/getProductDetailList.do")
	public NexacroResult getRaisreqList(
		@ParamVariable(name = "product_code") String product_code,
		@ParamVariable(name = "product_name") String product_name,
		@ParamVariable(name = "partner_name") String partner_name,
		@ParamVariable(name = "product_sell_enable") String product_sell_enable
		) {
		Map<String, String> productMap = new HashMap<String, String>();

		productMap.put("product_code", product_code);            
		productMap.put("product_name", product_name);
		productMap.put("partner_name", partner_name);
		productMap.put("product_sell_enable", product_sell_enable);

		List<ProductVO> productList = service.getProductList(productMap);

		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", productList);

		return result;
	}
}
