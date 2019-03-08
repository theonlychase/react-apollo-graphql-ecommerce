import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {

    // special next.js lifecycle method. Runs first before render happens
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        // Will crawl every page for queries or mutations that we have on the page that need to be fetched. THey need to be fired off and resolved before we render out the page
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        // This exposes the query to the user
        pageProps.query = ctx.query;
        return { pageProps };
    }

    render () {
        const { Component, apollo, pageProps } = this.props;
        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps}/>
                    </Page>
                </ApolloProvider>
            </Container>
        )
    }
}

// Makes Apollo client accessible via this.props
export default withData(MyApp);