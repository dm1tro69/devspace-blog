import Head from "next/head";
import Header from "./Header";

const Layout = ({title, keywords, description, children}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <main name={'keywords'} content={keywords}/>
                <main name={'description'} content={description}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className={'container mx-auto my-7'}>
                {children}

            </main>
        </div>
    );
};

export default Layout;
Layout.defaultProps = {
    keywords: 'development, coding',
    description: 'The best info and news',
    title: 'Welcome to DevSpace'
}
