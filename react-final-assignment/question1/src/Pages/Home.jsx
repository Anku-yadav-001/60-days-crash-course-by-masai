import {Box, Container, Heading} from "@chakra-ui/react"
import "../Pages/My.css"
export function Home(){

    return <>
       {/* <Box>
            <Container border="2px solid red" maxW='70%'>
              <img src="https://i.pinimg.com/originals/0a/7e/eb/0a7eeb41ca4c7d8495c73891ec784e52.jpg" alt="" style={{width:"100%",height:"70vh"}}/>
              <Heading as="h3" size="lg" mt="-30%">We help cannabies clubs find real estate</Heading>
              <p>Found by a former city planner and a connabies industry pioneer. Our team has decades of experience finding and permitting peroperties for cannonies businesses. We understand the unique challanges and opportunities of the cannabies industry, and we're here to help you succed.</p>
            </Container>
       </Box> */}
<div class="container">
		<div class="header">
			<h1>Cannabis Club Real Estate</h1>
		</div>
		<div class="content">
			<div class="section">
				<h2>We help cannabis clubs find real estate</h2>
				<p>Founded by a former city planner and a cannabis industry pioneer, our team has decades of experience finding and permitting properties for cannabis businesses. We understand the unique challenges and opportunities of the cannabis industry, and we're here to help you succeed.</p>
				<a href="#" class="button">Learn more</a>
			</div>
			<div class="section">
				<h2>How we help</h2>
				<ul>
					<li>Find the perfect location for your cannabis club</li>
					<li>Work with experienced consultants</li>
					<li>Get help with permits</li>
					<li>Navigate the complex web of regulations and permits</li>
					<li>Provide guidance on everything from branding to compliance</li>
				</ul>
				<a href="#" class="button">Get a free consultation</a>
			</div>
			<div class="section">
				<h2>Trusted by top cannabis brands</h2>
				<p>We've helped countless cannabis clubs find their perfect location and navigate the complex web of regulations and permits. Here's what some of our clients have to say:</p>
				<blockquote>
					<p>"Great service! The team really knows their stuff and helped us find the perfect location for our cannabis club." - Jane</p>
					<p>"Highly recommend! They made the permit process a breeze and provided valuable insights on branding and compliance." - John</p>
					<p>"Excellent experience from start to finish. They're a trusted partner for anyone looking to start or expand a cannabis business." - Jack</p>
				</blockquote>
        </div>
        </div>
        </div>
    </>
}