import { Box, Button, Container, Heading, SimpleGrid,Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon, Flex, Spacer } from "@chakra-ui/react"
export function Home() {
      
	return <>
		<Container maxW='50%' height="50vh" textAlign="center" p="20px" borderRadius="10px" mt="20px" backgroundImage="https://i.pinimg.com/originals/09/7a/8a/097a8a4eae6ff0b6550ec9025978e96a.jpg" color="red" backgroundSize="cover">
			<Heading as="h3" size="lg" mt="100px">Welcome to European Grains</Heading>
			<p>Found by a former city planner and a connabies industry pioneer. Our team has decades of experience finding and permitting peroperties for cannonies businesses. We understand the unique challanges and opportunities of the cannabies industry, and we're here to help you succed.</p>
			<Button bg="green" m="10px"> Learn More</Button>
			<Button>Sign Up</Button>
		</Container>
		<Container maxW="50%">
			<Heading mt="4rem">How We help</Heading>
			<SimpleGrid columns={4} spacing={2} mt="20px">
				<Box height="100px">
					<img src="https://th.bing.com/th/id/OIP.PUuevUFoxDO5lRMcQBdQnAHaE8?rs=1&pid=ImgDetMain" alt="" style={{ height: "100%", borderRadius: "10px", width: "100%" }} />
					<Heading as="h6" size="xm" style={{ fontSize: "12px" }}>Find the perfect location</Heading>
					<p style={{ fontSize: "10px" }}>Our team wil help you find the ideal location for your cannebis club, with a focus on foot traffic, visibility, and local demographics.</p>
				</Box>
				<Box height="100px">
					<img src="https://th.bing.com/th/id/OIP.odSm-Lqc9Au-acbkdUboowHaE-?rs=1&pid=ImgDetMain" alt="" style={{ height: "100%", borderRadius: "10px", width: "100%" }} />
					<Heading as="h6" size="xm" style={{ fontSize: "12px" }}>Get help with permits</Heading>
					<p style={{ fontSize: "10px" }}>navigating the compex web of regulations and permits can be daunting, We'll help you understand the process and get it done right.</p>
				</Box>
				<Box height="100px">
					<img src="https://th.bing.com/th/id/OIP.ci1E7m8wCISyHZ6um8z01gHaDt?rs=1&pid=ImgDetMain" alt="" style={{ height: "100%", borderRadius: "10px", width: "100%" }} />
					<Heading as="h6" size="xm" style={{ fontSize: "12px" }}>Work with consultants</Heading>
					<p style={{ fontSize: "10px" }}>Our consultants have deep expertise in the cannabies industry and a track record of success. We'll provide guidance on everything guidance on everything from branding to compliance.</p>
				</Box>
				<Box height="100px">
					<img src="https://th.bing.com/th/id/OIP.c3-f252VmlCzxKBGC_aIWQHaFe?rs=1&pid=ImgDetMain" alt="" style={{ height: "100%", borderRadius: "10px", width: "100%" }} />
					<Heading as="h6" size="xm" style={{ fontSize: "12px" }}>Get free consultation</Heading>
					<p style={{ fontSize: "10px" }}>Ready to take the next step? Schedule a free consultation with our team and learn how we can help you achieve your goals.</p>
				</Box>
			</SimpleGrid>
		</Container>
		<Container maxW="50%" textAlign="center" mt="8rem">
			<Heading as="h4" size="lg">Trusted by top connabies brands</Heading>
			<SimpleGrid columns={5} spacing={5} mt="20px">
				<Box >
					<img src="https://th.bing.com/th/id/OIP.zgxCOfxLyHIw9liQ7wOC-gHaHa?rs=1&pid=ImgDetMain" alt="" style={{ borderRadius: "10px" }} />
				</Box>
				<Box >
					<img src="https://th.bing.com/th/id/OIP.zgxCOfxLyHIw9liQ7wOC-gHaHa?rs=1&pid=ImgDetMain" alt="" style={{ borderRadius: "10px" }} />
				</Box>
				<Box >
					<img src="https://th.bing.com/th/id/OIP.zgxCOfxLyHIw9liQ7wOC-gHaHa?rs=1&pid=ImgDetMain" alt="" style={{ borderRadius: "10px" }} />
				</Box>
				<Box >
					<img src="https://th.bing.com/th/id/OIP.zgxCOfxLyHIw9liQ7wOC-gHaHa?rs=1&pid=ImgDetMain" alt="" style={{ borderRadius: "10px" }} />
				</Box>
				<Box >
					<img src="https://th.bing.com/th/id/OIP.zgxCOfxLyHIw9liQ7wOC-gHaHa?rs=1&pid=ImgDetMain" alt="" style={{ borderRadius: "10px" }} />
				</Box>
			</SimpleGrid>
		</Container>
		<Container maxW="50%" mt="4rem" textAlign="center">
			<Heading as="h4" size="lg">Ready to take the next step?</Heading>
			<p>We'll help you to find perfect location for your cannabies club, navigate the complex web of regulations and permits, and provide guidance on everything from branding to compliance.</p>
			<Button bg="green" mt="20px">Schedule a free consultation</Button>
		</Container>
		<Container maxW="50%" mt="5vh">
			<Heading as="h1" size="md">About Us</Heading>
			<p>Founded by the farmer city plannner and a cannabies industry pioneer, our team has decades of experience of experience finding and permitting properties for cannabis bussiness. We understande the unique challanges and opportunities of the cannabis industry, and we're here to help you succeed.</p>
		</Container>

		<Container maxW="50%" mt="5vh">
			<Heading as="h1" size="md">How it works</Heading>
			<p>Our process designed to help you navigae to complexities of finding and permitting properties for cannabies businesses. We'll srart by getting to know your needs and goals, then work with you every step of the way to ensure a successful outcome.</p>
		</Container>
		<Container maxW="50%" mt="4vh">
			<Heading as="h4" size="md">What they say</Heading>
			<Box mt="1rem" border="1px solid gray" p="10px" borderRadius="10px">
				<Heading as="h6" size="xs">Jane</Heading>
				<p>1 june, 2023</p>	 
				<p>⭐⭐⭐⭐⭐</p>
				<p>Great service! The team really, knows their stuff and helped us find the perfect location for our cannabis clue.</p>
				<pre>👍    👎</pre>
			</Box>
			<Box mt="1rem" border="1px solid gray" p="10px" borderRadius="10px">
				<Heading as="h6" size="xs">John</Heading>
				<p>15 june, 2023</p>	 
				<p>⭐⭐⭐⭐⭐</p>
				<p>Heighly recommend! They made the permit process a breeze and provided valuable insights on brainding and complaince.</p>
				<pre>👍    👎</pre>
			</Box>
			<Box mt="1rem" border="1px solid gray" p="10px" borderRadius="10px">
				<Heading as="h6" size="xs">Jack</Heading>
				<p>20 june, 2023</p>	 
				<p>⭐⭐⭐⭐⭐</p>
				<p>Excellent expericence from start to finish, Thet are a trusted partner for anyone looking to start or expand a connabis business.</p>
				<pre>👍    👎</pre>
			</Box>
		</Container>
		<Container maxW="50%" mt="2rem">
				<Heading as="h5" size="md">Frequently asked questions</Heading>
<Accordion allowToggle mt="2rem">
  <AccordionItem >
    <h2>
      <AccordionButton >
        <Box as='span' flex='1' textAlign='left' mt="1rem">
          1. How can you help find a location for cannabies club?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          2. What is the process for obtaining permits for a cannabis club?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          3. Do you provide consulting services for cannabis businesses?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          4. How much does it cost to work with you?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</Container>

<Container maxW="50%" mt="2rem">
		<Heading as="h6" size="md">Latest news</Heading>
<Flex>
  <Box p='4' >
  <Heading as="h6" size="xs">How to choose a location for your cannabis club</Heading>
			<p>July 15, 2024 . 5 min read</p>
			<Button m="20px">Read more</Button>
  </Box>
  <Box p='4' maxW="50%">
  <img src="https://fthmb.tqn.com/6DrtO40qnoND20afLabJ8MHUN4w=/1614x1105/filters:fill(auto,1)/Maplocation_-5a492a4e482c52003601ea25.jpg" alt="" style={{width:"40%",borderRadius:"10px"}}/>
  </Box>
</Flex>
<Flex>
  <Box p='4' >
  <Heading as="h6" size="xs">Navigating the permits process for cannabis clubs</Heading>
			<p>July 25, 2024 . 4 min read</p>
			<Button m="20px">Read more</Button>
  </Box>
  <Box p='4' maxW="50%">
  <img src="https://www.billingsandbeyond.com/wp-content/uploads/2017/09/Location-Map-Pin-1024x655.jpg" alt="" style={{width:"40%",borderRadius:"10px"}}/>
  </Box>
</Flex>
<Flex>
  <Box p='4' >
  <Heading as="h6" size="xs">Branding tips for cannabis businesses</Heading>
			<p>July 25, 2024 . 8 min read</p>
			<Button m="20px">Read more</Button>
  </Box>
  <Box p='4' maxW="50%">
  <img src="https://www.found.co.uk/wp-content/uploads/2013/04/location-location-location-1.png" alt="" style={{width:"40%",borderRadius:"10px"}}/>
  </Box>
</Flex>
</Container>

	</>
}