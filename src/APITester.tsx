import { useRef, useState, type FormEvent } from 'react';

export function APITester() {
  const responseInputRef = useRef<HTMLTextAreaElement>(null);
  const response2InputRef = useRef<HTMLTextAreaElement>(null);
  const [name, setName] = useState('');

  const testEndpoint = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const endpoint = formData.get('endpoint') as string;
      
      const name = formData.get('name') as string;
      const url = new URL(endpoint + (name ? `/${name}` : ''), location.href);
      const method = formData.get('method') as string;
      const res = await fetch(url, { method });

      const data = await res.json();
      const isSecondForm = !!formData.get('name');
      const targetRef = isSecondForm ? response2InputRef : responseInputRef;
      targetRef.current!.value = JSON.stringify(data, null, 2);
    } catch (error) {
      const isSecondForm = !!name
      const targetRef = isSecondForm ? response2InputRef : responseInputRef;
      targetRef.current!.value = String(error); 
    }
  };

  return (
    <div className="api-tester">
      <form onSubmit={testEndpoint} className="endpoint-row">
        <select name="method" className="method">
          <option value="GET">GET</option>
          <option value="PUT">PUT</option>
        </select>
        <input
          type="text"
          name="endpoint"
          defaultValue="/api/hello"
          className="url-input"
          placeholder="/api/hello"
          readOnly
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
      <textarea
        ref={responseInputRef}
        name="response"
        readOnly
        placeholder="Response will appear here..."
        className="response-area"
      />

      <form onSubmit={testEndpoint} className="endpoint-row">
        <div className="rounded-lg bg-[#fbf0df] p-1 px-3 text-sm font-bold text-black">GET</div>
        <input
          type="hidden"
          name="endpoint"
          defaultValue="/api/hello"
          className="url-input"
          placeholder="/api/hello"
          readOnly
        />
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className="url-input"
          placeholder="/api/hello/:name"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
      <textarea
        ref={response2InputRef}
        name="response2"
        readOnly
        placeholder="Response will appear here..."
        className="response-area"
      />
    </div>
  );
}
