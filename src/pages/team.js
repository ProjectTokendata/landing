import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Section from '../components/Section'
import Image from '../components/Image'
import Title from '../components/Title'
import TitleAndText from '../components/TitleAndText'
import Box from '../components/Box'
import Line from '../components/Line'

import styles from './team.module.scss'

const TeamBox = ({ name, description, color }) => (
  <div className={styles.teamBox}>
    <div className={styles.teamBackground} style={{ background: color }} />
    <Box
      style={{
        height: 300,
        padding: 0,
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      <Image name="placeholder" style={{ width: '100%' }} />
    </Box>
    <Title style={{ fontSize: 24, textTransform: 'uppercase', marginTop: 15 }}>
      {name}
    </Title>
    <div style={{ fontSize: 14, marginTop: 5 }}>{description}</div>
  </div>
)

class TeamPage extends Component {
  state = { color: undefined }

  onPositionChange = ({ currentPosition }) => {
    if (currentPosition === 'above') {
      this.setState({ color: 'white' })
    }
  }

  handleWaypointEnter = () => {
    return this.setState({ color: 'pink' })
  }

  handleWaypointLeave = () => {
    return this.setState({ color: 'white' })
  }

  render() {
    const { color } = this.state

    return (
      <Layout color={color}>
        <Waypoint
          onPositionChange={this.onPositionChange}
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        >
          <div style={{ height: 1010, background: '#FEF4FE' }}>
            <Section style={{ height: '100%', alignItems: 'center' }}>
              <Title style={{ marginBottom: 60 }}>About us</Title>
              <div style={{ display: 'flex' }}>
                <div className={styles.description}>
                  Born in 2017 tokendata est issu d’une réflexion et d’un
                  travail au long cours. Voici notre histoire :<br />
                  When in 2015 we started to hear about the Consensys project
                  https://thebkp.com/, it was like everything we knew collapsed.
                  We then dig into the blockchain world and we felt like a new
                  world was opening its doors to us.
                  <br />
                  Then we discovered the Ethereum project, and started to follow
                  and support all the extraordinary projects it launched in
                  2016. The rocket was launched, and more and more projects
                  started to finance themselves through the ICO, we therefore
                  have to, unable to support all new projects, start collecting
                  data on them to evaluate them to support the most promising.
                  It was at this point that we realized that the traditional
                  methods of analysis that we used to use do not apply here. For
                  two reasons: 1) Ecosystem stakeholders are very different from
                  traditional investment circles and therefore different
                  decision-making behaviors 2) The data available to us was not
                  sufficient for the application of the models financial and
                  econometric analyzes that we knew.
                </div>
                <div className={styles.description}>
                  It was then that we started to focus on Big Data methodologies
                  and more specifically on Machine Learning. Since 2016, we
                  collect millions of data on the Blockchain sector, and use the
                  most advanced machine learning techniques to try to create
                  alpha sources of alternative and derived data.
                  <br />
                  The year 2017 saw an explosion in the number of companies
                  funded through ICOs, and many of them turned out to be Scam.
                  While our tools allowed us to detect them relatively early, we
                  realized that many contributors had been tempted by
                  investments in projects that would never see the light of day.
                  This type of behavior, if it lasts for too long and attracts
                  too many fraudsters, can lead to an anti-selection phenomenon
                  on the market and discourage contributors who wish to support
                  the best ICOs.
                  <br />
                  That's why since the beginning of 2017 we have been working on
                  the development of a platform to spread our work to as many
                  people as possible, by offering reliable and complete datasets
                  as well as by creating and improving new indicators to allow
                  the eco-system of the blockchain to grow even faster.
                  <Line />
                </div>
              </div>
            </Section>
          </div>
        </Waypoint>
        <Section style={{ padding: '200px 30px' }}>
          <TitleAndText
            title="Our Team to the moon"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis eget libero eget consectetur. Sed a luctus mauris, sit amet rhoncus justo. Donec quis imperdiet ligula."
            style={{ marginBottom: 100 }}
          />
          <div className={styles.teamRow}>
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FDEFE9"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FDEFE9"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FDEFE9"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FDEFE9"
            />
          </div>
          <div className={styles.teamRow}>
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FCF6CE"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FCF6CE"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FCF6CE"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FCF6CE"
            />
          </div>
          <div className={styles.teamRow}>
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#E9FAFF"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#E9FAFF"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#E9FAFF"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#E9FAFF"
            />
          </div>
        </Section>
        <Section style={{ padding: '200px 30px' }}>
          <TitleAndText
            title="Advisors & Investors"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis eget libero eget consectetur. Sed a luctus mauris, sit amet rhoncus justo. Donec quis imperdiet ligula."
            style={{ marginBottom: 100 }}
          />
          <div className={styles.teamRow}>
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FDEFE9"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FDEFE9"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FDEFE9"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FDEFE9"
            />
          </div>
        </Section>
      </Layout>
    )
  }
}

export default TeamPage
