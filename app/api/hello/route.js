export async function GET(request){
    return new Response("hello from next js get route");
}

export async function POST(request){
    return new Response("hello from next js post route");
}