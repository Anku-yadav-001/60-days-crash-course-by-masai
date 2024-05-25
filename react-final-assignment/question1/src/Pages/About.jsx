import {Box, Container, Heading, SimpleGrid} from "@chakra-ui/react"

export function About(){
   
    return <>
       <Box>
            <Container maxW='50%' height="50vh" textAlign="center" p="20px" borderRadius="10px" mt="20px" background="orange.400" color="white">
              <Heading as="h3" size="lg">We help cannabies clubs find real estate</Heading>
              <p>Found by a former city planner and a connabies industry pioneer. Our team has decades of experience finding and permitting peroperties for cannonies businesses. We understand the unique challanges and opportunities of the cannabies industry, and we're here to help you succed.</p>
            
            </Container>
           <Container maxW="50%" mt="20px">
               <Heading as="h6" size="md" textAlign="left">About</Heading>
			<p style={{fontSize:"14px"}}>Founded in 2010, European Grains has emerged as one of Europe's leading grain and oilseed trading companies. Our business is based on our strong relationships with producers and consumers and our ability to supply high-quality products. We have built a reputation for relputation for reliability, integrity, and innovation, we are commited to helping our customers succeed. Our mission is to be most tructed partner for our customers and suppliers, providing them eith the best products and service. We are dedicated to building long-term relationships and creating value for all stackholders. We belive in the importance of sustaninability and are commited to ensuring that our business practices are environmentally and socially responsible. We are constnously working to imporve our operations our operations and reducing our impact on the environment.</p>
           </Container>
       </Box> 
       <Container maxW="50%" mt="20px">
       <Heading as="h6" size="md" textAlign="left" p="10px">Our Products</Heading>
       <SimpleGrid columns={5} spacing={10}>
           <Box height="100px" textAlign="center">
         <img src="https://images4.alphacoders.com/764/thumb-1920-764670.jpg" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
         <p>Wheat</p>
           </Box>
           <Box height="100px" textAlign="center">
              <img src="https://th.bing.com/th/id/OIP.K4mRBm2u3KxmoqkDonMrIwHaHa?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
              <p>Rye</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://th.bing.com/th/id/OIP.gL1y7TtNhchgsN4E9RyCuQHaE8?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>Barley</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://www.healthbenefitstimes.com/glossary/wp-content/uploads/2020/10/Maize.jpg" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>Maize</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://th.bing.com/th/id/OIP.W6JL-RGczAzMk8OGS4xcowHaGE?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>OilSeeds</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://th.bing.com/th/id/OIP.W6JL-RGczAzMk8OGS4xcowHaGE?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>Wheat Flour</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://th.bing.com/th/id/OIP.O4GJdvmwdoHCtw0oJVN1LAHaE0?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>Wheat Bran</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://th.bing.com/th/id/OIP.7k3MlSzWsp_wAgCTLDb86QAAAA?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>Wheat Grem</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://th.bing.com/th/id/OIP.MeUTh-MoTHAxGFONjDn_HQHaFD?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>Ray Flour</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://th.bing.com/th/id/OIP.DNj6efnAEGQEAyJs7STAjgHaF7?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>Barley Flour</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://th.bing.com/th/id/OIP.K66YxS-0AAUU-2iz9EqkxgHaE7?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>Maize Flour</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://th.bing.com/th/id/OIP.phy71tG3QoDmFQCPGJSdmwHaHh?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>Maize Meal</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://th.bing.com/th/id/OIP.OJsyXjmhdjQOjGX5l_ORxgHaIC?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>Sunflower Cake</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://th.bing.com/th/id/OIP.LJgRvTFpUPDBCWUEeP-68AHaHa?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>Rapeseed Cake</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://th.bing.com/th/id/OIP.qgqPv-zWFu_xYQ6Ojv4QXwHaE9?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>Soyabean Meal</p>
           </Box>
           <Box height="100px" textAlign="center">
            <img src="https://th.bing.com/th/id/OIP.khxYfkjDEJUY3ejIwGbneAHaE8?rs=1&pid=ImgDetMain" alt="" style={{height:"100%",width:"100%", borderRadius:"10px"}}/>
            <p>Soyabean Hulls</p>
           </Box>
       </SimpleGrid>
       </Container>
    </>
}