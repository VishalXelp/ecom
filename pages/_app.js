import '../assets/styles/bootstrap.min.css';
import '../assets/styles/fontawesome.min.css';
import '../assets/styles/style.css';
import '../assets/styles/responsive.css';
import '../assets/styles/animate.min.css';
import '../assets/styles/slick.css';
import '../assets/styles/slick-theme.css';

import { Provider } from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
// import { DefaultSeo } from 'next-seo';
import GoTop from '../components/Shared/GoTop';

export default withRedux(initStore)(
    class MyApp extends App {
        
        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        render () {
            const { Component, pageProps, store } = this.props

            return (
                <Container>
                    {/* <DefaultSeo
                        title="demo_test"
                        description=" This has been built with React, Next.js, Express.js, and ES6+"
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: '',
                           
                        }}
                    /> */}
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </Container>
            );
        }
    }
)