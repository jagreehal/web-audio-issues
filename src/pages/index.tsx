import Nav from '@/components/Nav';
export default function IndexPage() {
  return (
    <div>
      <p>
        Playing audio on the web is easy enough... however when playing audio after an async
        operation might not work as you would expect!
      </p>
      <p className="mt-4">
        Use the links below to see what happens and read the
        <a
          className="text-blue-500"
          target="_blank"
          rel="noreferrer"
          href="http://arrangeactassert.com/posts/how-to-fix-the-request-is-not-allowed-by-the-user-agent-or-the-platform-in-the-current-context-possibly-because-the-user-denied-permission/"
        >
          {' '}
          post{' '}
        </a>
        about how to work around the issue.
      </p>
      <nav>
        <Nav />
      </nav>
    </div>
  );
}
