import {Box, Button, Container, Heading, Input, SimpleGrid, Textarea} from "@chakra-ui/react"

export function About(){
   
    return <>
       <Box>
            <Container maxW='50%' height="50vh" textAlign="center" p="20px" borderRadius="10px" mt="20px" backgroundImage="https://thumbs.dreamstime.com/b/wheat-ears-sunset-silhouettes-sky-background-95008999.jpg" color="red" backgroundSize="cover">
              <Heading as="h3" size="lg" mt="100px">Welcome to European Grains</Heading>
              <p>We re a leading grain and oilseed trading company operating in the European Union</p>
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
       <Container maxW="50%" mt="60px" p="10px">
          <Heading as="h6" size="md">Delivery and Packaging</Heading>
			<p style={{fontSize:"14px"}}>We offer a range of delivery and packaging options to meet your needs. Our products can be delivered in bulk or in bags, and we can provide custom packaging solutions if required. We work with a network of trusted transport paterns to ensure that your order is delicered on the time and in perfect condition. If you have any specific requirements, please let us know, and we will do our best to accommodate them.</p>
       </Container>
       <Container mt="20px" maxW="50%">
          <Heading as="h6" size="md">Contact Us</Heading>
          <label style={{paddingTop:"50px"}}>Your Name</label><br />
          <Input maxW="50%"/><br />
          <label style={{paddingTop:"50px"}}>Your Email</label><br />
          <Input maxW="50%"/><br />
          <label style={{paddingTop:"50px"}}>Your Message</label><br />
          <Textarea maxW="50%"/><br />
          <Button color="black" bg="green.500" mt="20px">Send</Button>
       </Container>
    </>
}