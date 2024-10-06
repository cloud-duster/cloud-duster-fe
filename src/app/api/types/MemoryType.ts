import FarewellLocation from "@/app/farewell/types/FarewellLocation";

interface Memory {
    id: number;
    nickname: string;
    image_url: string;
    message: string;
    location: FarewellLocation;
    size: number;
    created_at: string
}

interface Memories {
    items: Array<Memory>;
    nextCursor: {
        createdAt: string;
        id: number;
    }
}

export { Memories, Memory };
